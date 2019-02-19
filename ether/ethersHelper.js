const ethers = require("ethers");
const Wallet = ethers.Wallet;

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

  create() {
    return this.createWallet(Wallet.createRandom());
  }

  restore(mnemonic) {
    try {
      return createWallet(Wallet.fromMnemonic(mnemonic));
    } catch (error) {
      return "error";
    }
  }
}

module.exports = EthersHelper();
