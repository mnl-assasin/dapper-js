const ethers = require("ethers");
const errors = require("../builder/errors");
const Wallet = ethers.Wallet;
const utils = ethers.utils;

const setDefault = require("../util/setDefault");
const { getTransactions } = require("../util/etherscan-api");

class EthersHelper {
  createWallet(wallet, path) {
    let signingKey = wallet.signingKey;
    return {
      mnemonic: signingKey.mnemonic,
      privateKey: signingKey.keyPair.privateKey,
      publicKey: signingKey.keyPair.publicKey,
      address: signingKey.address,
      path: path
    };
  }

  getProvider(network) {
    try {
      return ethers.getDefaultProvider(network);
    } catch (error) {
      throw errors.UNSUPPORTED_OPERATION(error);
    }
  }

  create() {
    return this.createWallet(Wallet.createRandom(), 0);
  }

  createHDWallet(mnemonic, path) {
    try {
      let derivationPath = "m/44'/60'/0'/0/" + path;
      return this.createWallet(
        Wallet.fromMnemonic(mnemonic, derivationPath),
        path
      );
    } catch (err) {
      throw errors.INVALID_MNEMONIC;
    }
  }

  restore(mnemonic) {
    try {
      return this.createWallet(Wallet.fromMnemonic(mnemonic), 0);
    } catch (err) {
      throw errors.INVALID_MNEMONIC;
    }
  }

  async getBalance(network, address) {
    try {
      let balance = await this.getProvider(network).getBalance(address);
      return {
        balance: this.bigNumberToEther(balance)
      };
    } catch (error) {
      // INVALID ADDRESS
      throw errors.INVALID_ADDRESS;
    }
  }

  // etherScan

  // Price in USD currency
  async getEtherPrice() {
    let provider = new ethers.providers.EtherscanProvider();
    let price = await provider.getEtherPrice();
    return {
      price
    };
  }

  async getHistory(network, address, startBlock, endBlock, page, offset, sort) {
    network = setDefault(network, "mainnet");
    startBlock = setDefault(startBlock, "1");
    endBlock = setDefault(endBlock, "latest");
    page = setDefault(page, 1);
    (offset = setDefault(offset, 5)), (sort = setDefault(sort, "desc"));

    try {
      let response = await getTransactions(
        network,
        address,
        startBlock,
        endBlock,
        page,
        offset,
        sort
      );

      let transactions = response.result;
      transactions.map(transaction => {
        let { gasPrice, gasUsed: gasLimit, value } = transaction;
        transaction.gasPrice = gasPrice.toString();
        transaction.gasLimit = gasLimit.toString();
        transaction.value = this.bigNumberToEther(value);
        return transaction;
      });

      return { transactions, page, offset };
    } catch (error) {
      console.log(error);
      throw errors.INVALID_ADDRESS;
    }
  }

  // Current blockNumber of selected network
  async getBlockNumber(network) {
    let blockNumber = await this.getProvider(network).getBlockNumber();
    return {
      blockNumber
    };
  }

  async getGasPrice(network) {
    let gasPrice = await this.getProvider(network).getGasPrice();
    return {
      network: network,
      gasPrice: gasPrice,
      gasPriceString: gasPrice.toString()
    };
  }

  async estimateGas(network, address, value) {
    try {
      let transaction = {
        to: address,
        value: this.parseUnits(value.amount, value.unit)
      };

      let estimatedGas = await this.getProvider(network).estimateGas(
        transaction
      );

      return {
        estimatedGas: estimatedGas,
        estimatedGasString: estimatedGas.toString()
      };
    } catch (error) {
      console.log(error);
    }
  }

  async estimateFees(network, address, value) {
    try {
      let provider = this.getProvider(network);
      let transaction = {
        to: address,
        value: value
      };
      let gasCost = await provider.estimateGas(transaction);
      let gasPrice = await provider.getGasPrice(network);
      let fee = gasCost.mul(gasPrice);
      let total = value.add(fee);

      let data = {
        gasCost,
        gasPrice,
        fee,
        total
      };

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async sendTransaction(network, privateKey, address, value, gasLimit, data) {
    const provider = this.getProvider(network);

    let wallet = new ethers.Wallet(privateKey, this.getProvider(network));

    let transaction = {
      gasLimit: this.stringToBigNumber(gasLimit),
      to: address,
      data: data,
      value: this.stringToETH(value)
    };

    return await wallet.sendTransaction(transaction);

    // const tx = await wallet.sendTransaction(transaction);

    // const waitTx = await provider.waitForTransaction(tx);

    // return provider.getTransactionReceipt(waitTx);
  }

  getContract(address, abi, wallet) {
    return new ethers.Contract(address, abi, wallet);
  }

  async deployContract(privateKey, network, abi, bytecode) {
    let wallet = new ethers.Wallet(privateKey, this.getProvider(network));
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    let contract = await factory.deploy(7);
    await contract.deployed();

    return { address: contract.address };
  }

  async deployContractWithParams(privateKey, network, abi, bytecode, params) {
    try {
      let wallet = new ethers.Wallet(privateKey, this.getProvider(network));
      let factory = new ethers.ContractFactory(abi, bytecode, wallet);
      let contract = await factory.deploy(...params);
      await contract.deployed();

      return { address: contract.address };
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }

  async executeNoParams(privateKey, network, address, abi, method) {
    let wallet = new ethers.Wallet(privateKey, this.getProvider(network));

    let contract = this.getContract(address, abi, wallet);
    let result = await contract[method]();
    let data = {
      result: result.toString()
    };
    return data;
  }

  async executeNoParamsPayable(
    privateKey,
    network,
    address,
    abi,
    method,
    value
  ) {
    let overrides = {
      value: this.stringToBigNumber(value)
    };

    let wallet = new ethers.Wallet(privateKey, this.getProvider(network));

    let contract = this.getContract(address, abi, wallet);
    let result = await contract[method](overrides);
    let data = {
      result: result.toString()
    };
    return data;
  }

  async executeWithParams(privateKey, network, address, abi, method, params) {
    let wallet = new Wallet(privateKey, this.getProvider(network));

    let contract = this.getContract(address, abi, wallet);
    let result = await contract[method](...params);
    let data = {
      result: result.toString()
    };

    return data;
  }

  async executeWithParamsPayable(
    privateKey,
    network,
    address,
    abi,
    method,
    params,
    value
  ) {
    let overrides = {
      value
    };
    console.log("executeWithParamsPayable: overrides=", overrides);
    let wallet = new Wallet(privateKey, this.getProvider(network));
    let contract = this.getContract(address, abi, wallet);
    let result = await contract[method](...params, overrides);
    let data = {
      result: result
    };

    return data;
  }

  async execute(privateKey, network, address, abi, method, payload) {
    let provider = ethers.providers.getDefaultProvider(network);
    let wallet = new Wallet(privateKey, provider);

    let contract = this.getContract(address, abi, wallet);
    let data = await contract[method](payload);

    return data;
  }

  async status(network, transactionHash) {
    return this.getProvider(network).getTransactionReceipt(transactionHash);
  }

  // DONT ADD FUCNCTION AFTER THIS
  // Convert Bn to Ether
  // 1 Eth = 1,000,000,000,000,000,000 wei
  bigNumberToEther(bigNumber) {
    return utils.formatEther(bigNumber);
  }

  stringToETH(string) {
    try {
      return utils.parseEther(string);
    } catch (error) {
      throw errors.INVALID_ETH_VALUE;
    }
  }

  stringToBigNumber(string) {
    try {
      return utils.bigNumberify(string);
    } catch (error) {
      console.log(error);
      throw errors.INVALID_BIG_NUMBER;
    }
  }

  parseEther(value) {
    return utils.parseUnits(string, "ether");
  }

  parseUnits(value, decimalOrUnits) {
    return utils.parseUnits(value.toString(), decimalOrUnits);
  }

  weiToEther(value) {
    return this.bigNumberToEther(this.parseUnits(value.toString(), "wei"));
  }

  gweiToEther(value) {
    return this.bigNumberToEther(this.parseUnits(value.toString(), "gwei"));
  }
}

module.exports = new EthersHelper();
