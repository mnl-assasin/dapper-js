const Wallet = require("./wallet");
const Transaction = require("./transaction");
const Contract = require("./contract");

/** ETHER TRANSACTION */
// Gas Price
// STEP 1 GET GAS PRICE
// Transaction.ethers
//   .gasPrice({ network: "ropsten" })
//   .then(data => console.log(data));
// STEP 2 ESTIMATE GAS FEE
Transaction.ethers
  .estimateFees({
    network: "kovan",
    address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
    value: "1000000"
  })
  .then(data => console.log(data));
// Transaction.ethers
//   .estimateFees({
//     network: "mainnet",
//     address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
//     value: "1000000"
//   })
//   .then(data => console.log(data));
// .then(data => console.log(data));
// const privateKey =
//   "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36";
// const address = "0x99bf3180c1ffaf070c34326cded67aba23ff409f";
// const abi = [
//   {
//     constant: true,
//     inputs: [],
//     name: "getName",
//     outputs: [
//       {
//         name: "",
//         type: "string"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "isPersonEmployed",
//     outputs: [
//       {
//         name: "",
//         type: "bool"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_age",
//         type: "int256"
//       }
//     ],
//     name: "addAge",
//     outputs: [
//       {
//         name: "",
//         type: "int256"
//       }
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "getAge",
//     outputs: [
//       {
//         name: "",
//         type: "int256"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_name",
//         type: "string"
//       },
//       {
//         name: "_age",
//         type: "int256"
//       },
//       {
//         name: "_isEmployed",
//         type: "bool"
//       }
//     ],
//     name: "setPerson",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_name",
//         type: "string"
//       }
//     ],
//     name: "setName",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_isEmployed",
//         type: "bool"
//       }
//     ],
//     name: "setEmployed",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_name",
//         type: "string"
//       },
//       {
//         name: "_age",
//         type: "int256"
//       }
//     ],
//     name: "setNameAge",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [
//       {
//         name: "_age",
//         type: "int256"
//       }
//     ],
//     name: "setAge",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   }
// ];

// // var params = ["Mykel Neds Leano", 21, false];
// var params = [10];
// var request = {
//   privateKey: privateKey,
//   network: "ropsten",
//   address: address,
//   abi: abi,
//   method: "addAge",
//   params: params
// };

// Contract.ethers
//   .executeWithParams(request)
//   .then(data => console.log(data))
//   .catch(error => {
//     console.log(error);
//   });

// SAMPLE FOR REQUEST WITHOUT PARAMS (START)
// var request = {
//   privateKey: privateKey,
//   network: "ropsten",
//   address: address,
//   abi: abi,
//   method: "getAge"
// };

// Contract.ethers
//   .executeNoParams(request)
//   .then(data => console.log(data))
//   .catch(error => {
//     console.log(error);
//   });
// SAMPLE FOR REQUEST WITHOUT PARAMS (END)

// Sample for create
// Wallet.ethers.create().then(data => {
//   console.log(data);
// });

// let createWallet = Wallet.ethers.create();

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
//     provider: "ropsten",
//     address: "0x0598aC83C088f126B3043059FCfd2E7A5F0886FF"
//   })
//   .then(data => {
//     console.log(JSON.stringify(data));
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
// Transaction.ethers
//   .blockNumber()
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
  Transaction,
  Contract
};
