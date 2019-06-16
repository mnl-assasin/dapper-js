const Wallet = require("./wallet");
const Transaction = require("./transaction");
const Contract = require("./contract");
// const privateKey =
//   "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36";

// const network = "rinkeby";
// const abi = [
//   {
//     constant: true,
//     inputs: [],
//     name: "getCount",
//     outputs: [
//       {
//         name: "",
//         type: "uint256"
//       }
//     ],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "increment",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     inputs: [
//       {
//         name: "_count",
//         type: "uint256"
//       }
//     ],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "constructor"
//   }
// ];
// const bytecode = {
//   linkReferences: {},
//   object:
//     "608060405234801561001057600080fd5b506040516020806101228339810180604052602081101561003057600080fd5b8101908080519060200190929190505050806000819055505060cb806100576000396000f3fe6080604052600436106043576000357c010000000000000000000000000000000000000000000000000000000090048063a87d942c146048578063d09de08a146070575b600080fd5b348015605357600080fd5b50605a6084565b6040518082815260200191505060405180910390f35b348015607b57600080fd5b506082608d565b005b60008054905090565b6001600080828254019250508190555056fea165627a7a72305820a9b34a563aee232fcd6db496256e6fcaef32766f47e1f7a4d9d5bd96c09b24480029",
//   opcodes:
//     "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x20 DUP1 PUSH2 0x122 DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x30 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 DUP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP DUP1 PUSH1 0x0 DUP2 SWAP1 SSTORE POP POP PUSH1 0xCB DUP1 PUSH2 0x57 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x43 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV DUP1 PUSH4 0xA87D942C EQ PUSH1 0x48 JUMPI DUP1 PUSH4 0xD09DE08A EQ PUSH1 0x70 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x53 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x5A PUSH1 0x84 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x7B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x82 PUSH1 0x8D JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 0xa9 0xb3 0x4a JUMP GASPRICE 0xee 0x23 0x2f 0xcd PUSH14 0xB496256E6FCAEF32766F47E1F7A4 0xd9 0xd5 0xbd SWAP7 0xc0 SWAP12 0x24 0x48 STOP 0x29 ",
//   sourceMap:
//     "27:313:0:-;;;107:68;8:9:-1;5:2;;;30:1;27;20:12;5:2;107:68:0;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;107:68:0;;;;;;;;;;;;;;;;161:6;153:5;:14;;;;107:68;27:313;;;;;;"
// };

// var request = {
//   privateKey,
//   network,
//   abi,
//   bytecode
// };

// Contract.ethers.deployContract(request).then(data => {
//   console.log(data);
// });

/**
 * CONTRACT DEPLOYMENT
 */

/** ETHER TRANSACTION */
// Gas Price
// STEP 1 GET GAS PRICE
// Transaction.ethers
//   .gasPrice({ network: "ropsten" })
//   .then(data => console.log(data));
// STEP 2 ESTIMATE GAS FEE
// Transaction.ethers
//   .estimateFees({
//     network: "kovan",
//     address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
//     value: "1000000"
//   })
//   .then(data => console.log(data));
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

// console.log(request);
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

// // Sample for restore
// Wallet.ethers
//   .restore({
//     mnemonic:
//       "scrub slam warior bamboo jacket swing cattle antique toy brand dynamic lunch"
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
//     provider: "ropsten",
//     address: "0x83287fc34Bd986A23e2C0BAaf09C898d80ff34c2"
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
//     network: "rinkeby",
//     value: "2"
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index catch");
//     console.log(error);
//   });

// Sample for Transferring ETH
// var txHash =
//   "0x5a371fe3ded7280a753e7729f13bf4ad7dd4e1366cfa94a2938c17cda560baee";
// Transaction.ethers.status("rinkeby", txHash).then(data => {
//   console.log(data);
// });
// Transaction.ethers
//   .send({
//     network: "rinkeby",
//     privateKey:
//       "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36",
//     address: "0xb437C3F1b2ca60362cC22B42e3E20cBA47Fe2ca7",
//     value: "1.50",
//     gasLimit: "21000"
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Index Error");
//     console.log(error);
//   });

// TODO: CHRISZER EDIT NETWORK ACCORDING TO YOUR TRXN HASH; DELETE THIS COMMENT THIS AFTER
// https://docs.ethers.io/ethers.js/html/migration.html?highlight=gettransactionreceipt

// @TODO: status check
// Transaction.ethers
//   .status({
//     network: "rinkeby",
//     transactionHash:
//       "0x44223f10a9f1225d38d098a21697239b4c99c32739713c15cfa57f1819b8ec30"
//   })
//   .then(data => console.log());

module.exports = {
  Wallet,
  Transaction,
  Contract
};
