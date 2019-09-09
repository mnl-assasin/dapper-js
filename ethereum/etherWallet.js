const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");
class EtherWallet {
  create() {
    return Promise.resolve(result.build(ethers.create()));
  }

  createHDWallet(request) {
    return new Promise((resolve, reject) => {
      try {
        let data = result.build(
          ethers.createHDWallet(request.mnemonic, request.path)
        );
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
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
      let data = await ethers.getBalance(request.provider, request.address);
      return result.build(data);
    }
  }

  async history(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else {
      console.log("request=", request);
      let data = await ethers.getHistory(request.network, request.address);
      return result.build(data);
    }
  }
}

module.exports = new EtherWallet();
