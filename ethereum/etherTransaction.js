const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");
const validate = require("validate.js");
const EventEmitter = require("events");

class EtherTransaction {
  // STATUS = {
  //   0: 'FAIL',
  //   1: 'SUCCESS',
  //   2: 'PENDING'
  // };

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
      const {
        network,
        address,
        value: {
          amount,
          unit
        }
      } = request;
      let data = await ethers.estimateGas(
        network,
        address,
        ethers.parseUnits(amount, unit)
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
          message: "network not found"
        }
      },
      address: {
        presence: {
          message: "address not found"
        }
      },
      value: {
        presence: {
          message: "value not found"
        }
      }
    };

    const validationErrors = validate(request, constraints);

    if (validationErrors) {
      throw errors.UNPROCESS_ENTITY(validationErrors);
    }

    const {
      network,
      address,
      value: {
        amount,
        unit
      }
    } = request;

    const data = await ethers.estimateFees(
      network,
      address,
      ethers.parseUnits(amount, unit)
    );
    const {
      gasCost,
      gasPrice,
      fee,
      total
    } = data;

    const payload = {
      gasLimit: gasCost.toString(),
      gasCost: ethers.gweiToEther(gasCost),
      gasPrice: ethers.weiToEther(gasPrice),
      gasFee: ethers.weiToEther(fee),
      total: ethers.weiToEther(total)
    };

    return result.build(payload);
  }

  async send(request) {
    console.log("send! ", request);
    const constraints = {
      privateKey: {
        presence: {
          message: "privateKey not found"
        }
      },
      address: {
        presence: {
          message: "address not found"
        }
      },
      value: {
        presence: {
          message: "value not found"
        }
      },
      gasLimit: {
        presence: {
          message: "gasLimit not found"
        }
      }
    };

    const validationErrors = validate(request, constraints);

    if (validationErrors) {
      throw errors.UNPROCESS_ENTITY(validationErrors);
    }

    // no need for try catch here as it will throw an error if something went wrong (insuffecient funds)
    const {
      network,
      privateKey,
      address,
      gasLimit,
      data: requestData,
      value: {
        amount,
        unit
      }
    } = request;
    let data = await ethers.sendTransaction(
      network,
      privateKey,
      address,
      ethers.parseUnits(amount, unit),
      gasLimit, requestData
    );

    return result.build(data);
  }

  async status(request) {
    const constraints = {
      network: {
        presence: {
          message: "network not found"
        }
      },
      transactionHash: {
        presence: {
          message: "transaction hash not found"
        }
      }
    };

    const validationErrors = validate(request, constraints);

    if (validationErrors) {
      throw errors.UNPROCESS_ENTITY(validationErrors);
    }

    try {
      console.log("\n\n\n ============= STATUS", "1st", request);

      const data = await ethers.status(
        request.network,
        request.transactionHash
      );

      return result.build({
        statusCode: data.status,
        status: this.STATUS[data.status]
      });
    } catch (e) {
      throw errors.SOMETHING_WENT_WRONG(e);
    }
  }

  sendAndWatchStatus(request) {
    const ee = new EventEmitter();

    this.send(request)
      .then(result => {
        const statusRequest = {
          network: request.network,
          transactionHash: result.data.hash
        };

        ee.emit("sent", result);

        // const repeatCheckStatus = () => {
        //   this.status(statusRequest).then((statusResult) => {
        //     switch(statusResult.data.statusCode) {
        //       // pending
        //       case '2':
        //         ee.emit('pending', statusResult.data);
        //         return setTimeout(() => {
        //           return repeatCheckStatus();
        //         }, 1000);
        //       case '1':
        //         ee.emit('success', statusResult.data);
        //       case '0':
        //         ee.emit('fail', statusResult.data);
        //     }
        //   }).catch(e => ee.emit('error', e));
        // }

        // repeatCheckStatus();
      })
      .catch(e => {
        ee.emit("error", e);
      });

    return ee;
  }
}

module.exports = new EtherTransaction();
