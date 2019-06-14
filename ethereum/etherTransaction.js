const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");
const validate = require('validate.js');

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
    const constraints = {
      network: {
        presence: {
          message: 'network not found'
        },
      },
      address: {
        presence: { 
          message: 'address not found'
        },
      },
      value: {
        presence: { 
          message: 'value not found'
        }
      }
    };

    const validationErrors = validate(request, constraints);

    if (validationErrors) {
      throw errors.UNPROCESS_ENTITY(validationErrors);
    }

    const { network, address, value } = request;

    const data = await ethers.estimateFees(network, address, value)

    const payload = {
      gasCost: ethers.parseUnits(data.gasCost, 'gwei'),
      gasPrice: ethers.stringToBigNumber(data.gasPrice),
      gasFee: ethers.stringToBigNumber(parseFloat(data.gasCost) * parseFloat(data.gasPrice)),
      total: ethers.stringToETH(data.estimatedTotalString),
      amountToSend: ethers.stringToETH(request.value),
    };

    return result.build(payload);
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

  async status(request) {

    const constraints = {
      network: {
        presence: {
          message: 'network not found'
        },
      },
      transactionHash: {
        presence: { 
          message: 'transaction hash not found'
        },
      },
    };

    const validationErrors = validate(request, constraints);

    if (validationErrors) {
      throw errors.UNPROCESS_ENTITY(validationErrors);
    }

    try {
      const data = await ethers.status(request.network, request.transactionHash);

      return result.build(data);
    } catch(e) {
      throw errors.SOMETHING_WENT_WRONG(e);
    }
  }
}

module.exports = new EtherTransaction();
