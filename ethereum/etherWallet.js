const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");
class EtherWallet {
  getHelper() {
    // will be using this for a while
    // will be replace when api is ready
    return ethers
  }

  create() {
    return Promise.resolve(result.build(ethers.create()));
  }

  restore(request) {
    return new Promise((resolve, reject) => {
      if (isUndefined(request)) {
        return reject(errors.UNDEFINED);
      }

      try {
        let data = result.build(ethers.restore(request.mnemonic));
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
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
