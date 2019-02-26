// class Errors{
//     let INVALID_MNEMONIC
// }
const errorBuilder = require("./errorBuilder");
let UNDEFINED = errorBuilder.build(
  400,
  "PARAMETERS UNDEFINED",
  "Parameters for this method is not supplied"
);
let INVALID_MNEMONIC = errorBuilder.build(
  401,
  "INVALID MNEMONIC",
  "The mnemonic phrase you specified is invalid"
);

var UNSUPPORTED_OPERATION = function(error) {
  return errorBuilder.build(402, error.code, error.reason);
};

let INVALID_ADDRESS = errorBuilder.build(
  403,
  "INVALID ADDRESS",
  "The address you requested is invalid"
);
module.exports = {
  UNDEFINED,
  INVALID_MNEMONIC,
  UNSUPPORTED_OPERATION,
  INVALID_ADDRESS
};
