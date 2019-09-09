const Wallet = require("./wallet");
const Transaction = require("./transaction");
const Contract = require("./contract");

Wallet.ethers
  .history({
    network: "ropsten",
    address: "0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2"
  })
  .then(data => console.log(""))
  .catch(error => console.log(error));

module.exports = {
  Wallet,
  Transaction,
  Contract
};
