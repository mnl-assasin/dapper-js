const etherHelpers = require('../ethereum/ethers');

const wallet = etherHelpers.create();
console.log(JSON.stringify(wallet, null, 2));
