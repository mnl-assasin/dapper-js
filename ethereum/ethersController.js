const ethers = require("ethers");
const Wallet = ethers.Wallet;
const utils = ethers.utils;
const providers = ethers.providers;

const ErrorBuilder = require("../util/errorBuilder");
const errorBuilder = new ErrorBuilder();

class EthersController {}

module.exports = EthersController;
