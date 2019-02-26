const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");
class EtherWallet {
  create() {
    return Promise.resolve(result.build(ethers.create()));
    // return new Promise((resolve, reject) => {
    //   Promise.resolve(result.build(ethers.create()));
    // });
  }

  async restore(request) {
    if (isUndefined(request)) {
      return Promise.reject(errors.UNDEFINED);
    } else {
      return new Promise((resolve, reject) => {
        try {
          let data = result.build(ethers.restore(request.mnemonic));
        } catch (error) {}
      });
      // try {
      //   let data = result.build(ethers.restore(request.mnemonic));
      //   Promise.resolve(data);
      // } catch (error) {
      //   return Promise.reject(error);
      // }
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
