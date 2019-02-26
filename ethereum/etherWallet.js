const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");
class EtherWallet {
  create() {
    return result.build(ethers.create());
  }

  restore(request) {
    if (isUndefined(request)) {
      return errors.UNDEFINED;
    } else {
      try {
        return result.build(ethers.restore(request.mnemonic));
      } catch (error) {
        return error;
      }
    }
  }

  async balance(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else {
      return await ethers.getBalance(request.provider, request.address);
    }
  }
}

module.exports = new EtherWallet();
