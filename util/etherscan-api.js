const etherscanApi = require('etherscan-api');
const setDefault = require('./setDefault');
const createdEtherscanAPIs = {};
const createEtherscanAPI = (apiKey, network = 'mainnet') => {
  network = setDefault(network, 'mainnet');
  const key = `${apiKey}${network}`;
  if (createdEtherscanAPIs.hasOwnProperty(key)) {
    return createdEtherscanAPIs[key];
  }
  const apiInstance = etherscanApi.init(apiKey, network);

  createdEtherscanAPIs[key] = apiInstance;
  return apiInstance;
};

const sortEnum = ['asc', 'desc'];
const getTransactions = (
  network,
  address,
  startblock = 1,
  endblock = 'latest',
  page = 1,
  offset = 10,
  sort = 'asc'
) => {
  const apiInstance = createEtherscanAPI(_, network);
  startblock = setDefault(startblock, 1);
  endblock = setDefault(endblock, 'latest');
  page = setDefault(page, 1);
  offset = setDefault(offset, 10);
  sort = setDefault(sort, 'asc');
  if (!sortEnum.includes(sort.toLowerCase())) {
    sort = 'asc';
  }
  return apiInstance.account.txlist(
    address,
    startblock,
    endblock,
    page,
    offset,
    sort
  );
};
module.exports = { getTransactions };
