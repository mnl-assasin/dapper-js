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

  async estimateGasCost(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else {
      let data = await ethers.estimateGas(
        request.network,
        request.address,
        request.value
      );
      return result.build(data);
    }
  }

  async blockNumber(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    }
    let data = await ethers.getBlockNumber(request.network);
    return result.build(data);
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

      // Return
      // amount to send = ETH
      // total gas fee = ETH
      // total = ETH
      // gas fee = gasCost * gasPrice
      // gasCost = GWEI
      // gasPrice = WEI
      // http://ethdocs.org/en/latest/ether.html
      // https://docs.ethers.io/ethers.js/html/
      // TRY CATCH...

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
      // RETURN ERROR. KAPAG NAGTRANSFER NA LOW AMOUNt

      return result.build(data);
    }
  }

  // TODO: CHRISZER ADD TRY CATCH ON ELSE FUNCTION; DELETE THIS COMMENT THIS AFTER
  async status(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    }
    if (isUndefined(request.network) || isUndefined(request.transactionHash)) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.status(request.network, request.transactionHash);
      // TODO: ADD TRY CATCH HERE
      return result.build(data);
    }
  }
}

module.exports = new EtherTransaction();
