const ethers = require("./ethers");
const result = require("../builder/resultBuilder");
const errors = require("../builder/errors");
const isUndefined = require("../util/isUndefined");

class EtherContract {
  getContract(address, abi, wallet) {
    return new ethers.Contract(address, abi, wallet);
  }

  async deployContract(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else if (
      isUndefined(request.privateKey) ||
      isUndefined(request.network) ||
      isUndefined(request.abi) ||
      isUndefined(request.bytecode)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.deployContract(
        request.privateKey,
        request.network,
        request.abi,
        request.bytecode
      );

      return result.build(data);
    }
  }

  async deployContractWithParams(request) {
    console.log("etherContract: deployContractWithParams");
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else if (
      isUndefined(request.privateKey) ||
      isUndefined(request.network) ||
      isUndefined(request.abi) ||
      isUndefined(request.bytecode) ||
      isUndefined(request.params)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.deployContractWithParams(
        request.privateKey,
        request.network,
        request.abi,
        request.bytecode,
        request.params
      );

      return result.build(data);
    }
  }

  async executeNoParams(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else if (
      isUndefined(request.privateKey) ||
      isUndefined(request.network) ||
      isUndefined(request.address) ||
      isUndefined(request.abi) ||
      isUndefined(request.method)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.executeNoParams(
        request.privateKey,
        request.network,
        request.address,
        request.abi,
        request.method
      );
      return result.build(data);
    }
  }

  async executeNoParamsPayable(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else if (
      isUndefined(request.privateKey) ||
      isUndefined(request.network) ||
      isUndefined(request.address) ||
      isUndefined(request.abi) ||
      isUndefined(request.method) ||
      isUndefined(request.value)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.executeNoParamsPayable(
        request.privateKey,
        request.network,
        request.address,
        request.abi,
        request.method,
        ethers.parseUnits(request.value.amount, value.unit)
      );
      return result.build(data);
    }
  }

  async executeWithParams(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else if (
      isUndefined(request.privateKey) ||
      isUndefined(request.network) ||
      isUndefined(request.address) ||
      isUndefined(request.abi) ||
      isUndefined(request.method) ||
      isUndefined(request.params)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.executeWithParams(
        request.privateKey,
        request.network,
        request.address,
        request.abi,
        request.method,
        request.params
      );
      return result.build(data);
    }
  }

  async executeWithParamsPayable(request) {
    if (isUndefined(request)) {
      throw errors.UNDEFINED;
    } else if (
      isUndefined(request.privateKey) ||
      isUndefined(request.network) ||
      isUndefined(request.address) ||
      isUndefined(request.abi) ||
      isUndefined(request.method) ||
      isUndefined(request.params) ||
      isUndefined(request.value)
    ) {
      throw errors.MISSING_PARAMS;
    } else {
      let data = await ethers.executeWithParamsPayable(
        request.privateKey,
        request.network,
        request.address,
        request.abi,
        request.method,
        request.params,
        ethers.parseUnits(request.value.amount, value.unit)
      );
      return result.build(data);
    }
  }

  async execute(privateKey, network, address, abi, method, payload) {
    let provider = ethers.providers.getDefaultProvider(network);
    let wallet = new Wallet(privateKey, provider);

    let contract = this.getContract(address, abi, wallet);
    let data = await contract[method](payload);

    return data;
  }
}

module.exports = new EtherContract();
