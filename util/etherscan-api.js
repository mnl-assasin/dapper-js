const etherscanApi = require("etherscan-api");
const setDefault = require("./setDefault");
const createdEtherscanAPIs = {};
const createEtherscanAPI = (apiKey = "", network = "mainnet") => {
  network = setDefault(network, "mainnet");
  const key = `${apiKey}${network}`;
  if (createdEtherscanAPIs.hasOwnProperty(key)) {
    return createdEtherscanAPIs[key];
  }
  const apiInstance = etherscanApi.init(apiKey, network);

  createdEtherscanAPIs[key] = apiInstance;
  return apiInstance;
};

const sortEnum = ["asc", "desc"];
const getTransactions = (
  network,
  address,
  startBlock,
  endBlock,
  page,
  offset,
  sort
) => {
  // console.log("network=", network);
  // console.log("address=", address);
  // console.log("startBlock=", startBlock);
  // console.log("endBlock=", endBlock);
  // console.log("page=", page);
  // console.log("offset=", offset);
  // console.log("sort=", sort);

  const etherScan = createEtherscanAPI("", network);
  if (!sortEnum.includes(sort.toLowerCase())) {
    sort = "desc";
  }
  return etherScan.account.txlist(
    address,
    startBlock,
    endBlock,
    page,
    offset,
    sort
  );
};
module.exports = { getTransactions };
