const Wallet = require('ethers').Wallet;

const wallet = Wallet.createRandom();
const etherHelpers = require('../ethereum/ethers');

const message = 'Hello world!';
etherHelpers.signMesage(wallet, message)
  .then(signature => {
    console.log(signature);
    const recovered = etherHelpers.verifyMessage(message, signature);
    console.log({
      recovered,
      'wallet.address': wallet.address,
      'wallet.address === recovered': wallet.address === recovered
    });
  })
  .catch(e => console.error(e));
