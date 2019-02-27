const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");

class EtherTransaction {
  async etherPrice() {
    let data = await ethers.getEtherPrice();
    return result.build(data);
  }

  async gasPrice(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else {
      let data = await ethers.getGasPrice(request.network);
      return result.build(data);
    }
  }

  // network not required;
  // address not required;
  // notice that estimate fee is the same with different testnets and mainnet
  async estimateFees(request) {
    console.log(request);
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else {
      let data = await ethers.estimateFees(
        request.network,
        request.address,
        request.value
      );

      return result.build(data);
    }
  }

  async send(request) {
    console.log(request);
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    }
    if (
      isUndefined(request.privateKey) ||
      isUndefined(request.address) ||
      isUndefined(request.value) ||
      isUndefined(request.gasLimit)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.sendTransaction(
        request.network,
        request.privateKey,
        request.address,
        request.value,
        request.gasLimit,
        request.data
      );

      return result.build(data);
    }
  }
}

module.exports = new EtherTransaction();
