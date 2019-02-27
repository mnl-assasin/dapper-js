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
Transaction.ethers
  .send({
    privateKey:
      "0x5854265dc36e266d14dcffab96c5661e19dcd7db8a2614158d203267991f672e"
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Index Error");
    console.log(error);
  });

// console.log(Wallet.ethers.restore());

// Wallet.ethers
//   .balance({
//     provider: "mainnet",
//     address: "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF"
//   })
//   .then(data => {
//     console.log("index data: ");
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("index error: ");
//     console.log(error);
//   });
// console.log(Error[400]);
module.exports = {
  Wallet,
  Transaction
};
// ethers
//   .getBalance("ropsten", "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF")
//   .then(data => {
//     console.log(JSON.stringify(data));
//   })
//   .catch(error => {
//     console.log(error);
//   });
// 0x0598aC83C088f126B3043059FCfd2E7A5F0886FF
// ethers
//   .estimateFees(
//     "ropsten",
//     "0x5854265dc36e266d14dcffab96c5661e19dcd7db8a2614158d203267991f672e",
//     "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF",
//     "1"
//   )
//   .then(data => {
//     console.log(data);
//   });

// ethers.getGasPrice().then(data => {
//   console.log(data);
// });

// Wallet History
// ethers
//   .getHistory("kovan", "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF")
//   .then(data => {
//     console.log(JSON.stringify(data));
//   });

// ethers.getBlockNumber().then(data => {
//   console.log(data);
// });

// Ether price
// ethers.getEtherPrice().then(data => {
//   console.log(data);
// });

// BALANCE
// ethers
//   .getBalance("rinkeby", "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF")
//   .then(data => {
//     console.log(data);
//   });
// ethers
//   .restore("")
//   .then(data => {})
//   .catch(error => {
//     console.log(error);
//   });
// ethers
//   .getBalance("", "")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error.code);
//   });
// module.exports = {
//   Wallet
// };
// console.log(ethers.restore(""));
