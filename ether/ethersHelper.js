const ethers = require("ethers");
const Wallet = ethers.Wallet;
const utils = ethers.utils;
const providers = ethers.providers;

const ErrorBuilder = require("../util/errorBuilder");
const errorBuilder = new ErrorBuilder();

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
    return ethers.getDefaultProvider(network);
  }

  create() {
    return this.createWallet(Wallet.createRandom());
  }

  restore(mnemonic) {
    try {
      return this.createWallet(Wallet.fromMnemonic(mnemonic));
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // balance returns on BigNumber format
  async getBalance(network, address) {
    let balance = await this.getProvider(network).getBalance(address);
    return {
      balance: this.bigNumberToEther(balance)
    };
  }

  // etherScan

  // Current blockNumber of selected network
  async getBlockNumber(network) {
    let blockNumber = await this.getProvider(network).getBlockNumber();
    return {
      blockNumber
    };
  }

  // Price in USD currency
  async getEtherPrice() {
    let provider = new ethers.providers.EtherscanProvider();
    let price = await provider.getEtherPrice();
    return {
      price
    };
  }

  async getHistory(network, address) {
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
  }

  async getGasPrice(network) {
    let gasPrice = await this.getProvider(network).getGasPrice();
    return {
      gasPrice: gasPrice.toString()
    };
  }

  async estimateFees(network, privateKey, address, value) {
    let provider = this.getProvider(network);
    let wallet = new ethers.Wallet(privateKey, provider);

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
    return utils.parseEther(string);
  }

  stringToBigNumber(string) {
    return utils.bigNumberify(string);
  }
}

module.exports = new EthersHelper();
