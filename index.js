const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

const Wallet = require("./wallet");
const wallet = new Wallet();

console.log(wallet.restore("restore"));
// console.log(Wallet.create());
// let createdWallet = wallet.create();
// createdWallet.then(response => {
//   console.log(response);
//   // let json = JSON.stringify(response);
//   // console.log(json);
// });

module.exports = {
  Wallet
};
