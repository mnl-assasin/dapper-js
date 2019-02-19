const ethers = require("./ether/ethersController");

class Wallet {
  create() {
    return Promise.resolve(ethers.create());
  }
  restore(mnemonic) {
    return ethers.restore(mnemonic);
  }
}

module.exports = Wallet;

//
