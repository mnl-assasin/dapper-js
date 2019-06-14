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

let INVALID_ETH_VALUE = errorBuilder.build(
  405,
  "INVALID ETH VALUE",
  "The supplied ETH value is invalid"
);

let INVALID_BIG_NUMBER = errorBuilder.build(
  406,
  "INVALID BIG NUMBER",
  "The supplied Big Number value is invalid"
);

let MISSING_PARAMS = errorBuilder.build(
  407,
  "MISSING PARAMETERS",
  "The supplied number of parameters does not match the function"
);

const UNPROCESS_ENTITY = (entities) => errorBuilder.build(444, "UNPROCESS ENTITY", entities);

const SOMETHING_WENT_WRONG = (error) => errorBuilder.build(500, "SOMETHING WENT WRONG", error);

module.exports = {
  UNDEFINED,
  INVALID_MNEMONIC,
  UNSUPPORTED_OPERATION,
  INVALID_ADDRESS,
  INVALID_ETH_VALUE,
  INVALID_BIG_NUMBER,
  MISSING_PARAMS,
  UNPROCESS_ENTITY,
  SOMETHING_WENT_WRONG,
};
