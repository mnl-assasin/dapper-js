const Wallet = require("./wallet");
const Transaction = require("./transaction");
// Sample for create
// Wallet.ethers.create().then(data => {
//   console.log(data);
// });

// Sample for restore
// Wallet.ethers
//   .restore({
//     mnemonic:
//       "crunch soldier universe crunch flight clip urge chalk giant silver rug tank"
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index catch: ");
//     console.log(error);
//   });

// Sample for balance
// Wallet.ethers
//   .balance({
//     provider: "rinkeby",
//     address: "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF"
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index catch:");
//     console.log(error);
//   });

// Sample for history
// Wallet.ethers
//   .history({
//     provider: "kovan",
//     address: "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF"
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index catch: ");
//     console.log(error);
//   });

// Sample for ETH Value in USD
// Transaction.ethers.etherPrice().then(data => {
//   console.log(data);
// });

// Sample for Gas Price
// Transaction.ethers
//   .gasPrice({
//     address: "ropsten"
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index catch");
//     console.log(error);
//   });

// Sample for Blocknumber
Transaction.ethers
  .blockNumber()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Index catch");
    console.log(error);
  });

// Sample for Estimate Fee
// Transaction.ethers
//   .estimateFees({
//     network: "ropsten",
//     value: "0.01"
//   })
//   .then(data => {
//     // console.log(data);
//   })
//   .catch(error => {
//     console.log("Index catch");
//     console.log(error);
//   });

// Sample for Transferring ETH
// Transaction.ethers
//   .send({
//     privateKey:
//       "0x5854265dc36e266d14dcffab96c5661e19dcd7db8a2614158d203267991f672e",
//     value: 1
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index Error");
//     console.log(error);
//   });

module.exports = {
  Wallet,
  Transaction
};
