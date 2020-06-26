const etherHelpers = require('../ethereum/ethers');

etherHelpers.getEtherPrice().then(({ price }) => console.log(price)).catch(e => console.error(e));
