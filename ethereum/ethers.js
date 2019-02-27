const ethers = require("ethers");
const errors = require("../builder/errors");
const Wallet = ethers.Wallet;
const utils = ethers.utils;
const providers = ethers.providers;

class EthersHelper {
  createWallet(wallet) {
    let signingKey = wallet.signingKey;
    return {
      mnemonic: signingKey.mnemonic,
      privateKey: signingKey.keyPair.privateKey,
      publicKey: signingKey.keyPair.publicKey,
      address: signingKey.address
    };
  }

  getProvider(network) {
    try {
      return ethers.getDefaultProvider(network);
    } catch (error) {
      console.log(error);
      throw errors.UNSUPPORTED_OPERATION(error);
    }
  }

  create() {
    return this.createWallet(Wallet.createRandom());
  }

  restore(mnemonic) {
    try {
      return this.createWallet(Wallet.fromMnemonic(mnemonic));
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

  async getHistory(network, address) {
    try {
      let provider = new ethers.providers.EtherscanProvider(network);
      let transactions = await provider.getHistory(address, 0, 99999999);
      transactions.map((val, key) => {
        let { gasPrice, gasLimit, value } = val;
        val.gasPrice = gasPrice.toString();
        val.gasLimit = gasLimit.toString();
        val.value = this.bigNumberToEther(value);
        return val;
      });

      return transactions;
    } catch (error) {
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
      gasPrice: gasPrice.toString()
    };
  }

  async estimateFees(network, address, value) {
    try {
      let provider = this.getProvider(network);
      let transaction = {
        to: address,
        value: this.stringToETH(value)
      };
      let gasCost = await provider.estimateGas(transaction);
      let gasPrice = await provider.getGasPrice(network);
      let fee = gasCost.mul(gasPrice);
      let total = this.stringToETH(value).add(fee);

      let data = {
        gasCost: gasCost.toString(),
        gasPrice: gasPrice.toString(),
        estimatedFeeString: utils.formatEther(fee),
        estimatedFee: parseFloat(utils.formatEther(fee)),
        estimatedTotalString: utils.formatEther(total),
        estimatedTotal: parseFloat(utils.formatEther(total))
      };
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async sendTransaction(network, privateKey, address, value, gasLimit, data) {
    let wallet = new ethers.Wallet(privateKey, this.getProvider(network));
    let transaction = {
      gasLimit: this.stringToBigNumber(gasLimit),
      to: address,
      data: data,
      value: this.stringToETH(value)
    };

    return await wallet.sendTransaction(transaction);
  }

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
}

module.exports = new EthersHelper();
