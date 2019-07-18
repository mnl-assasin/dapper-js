const etherContract = require("../ethereum/etherContract");

const privateKey =
  "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36";
const network = "ropsten";
const address = "0xfaf636d0748f31de67d835b049262f9575052b3d";
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_packageName",
        type: "string"
      },
      {
        name: "_versionCode",
        type: "uint256"
      },
      {
        name: "_isRequired",
        type: "bool"
      }
    ],
    name: "addApp",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_packageName",
        type: "string"
      }
    ],
    name: "deleteApp",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_packageName",
        type: "string"
      },
      {
        name: "_versionCode",
        type: "uint256"
      },
      {
        name: "_isRequired",
        type: "bool"
      }
    ],
    name: "updateApp",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "string"
      }
    ],
    name: "app",
    outputs: [
      {
        name: "packageName",
        type: "string"
      },
      {
        name: "versionCode",
        type: "uint256"
      },
      {
        name: "isRequired",
        type: "bool"
      },
      {
        name: "appOwners",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "contractValue",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_packageName",
        type: "string"
      }
    ],
    name: "getAppVersion",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "string"
      }
    ],
    name: "isExist",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_packageName",
        type: "string"
      },
      {
        name: "versionCode",
        type: "uint256"
      }
    ],
    name: "isUpdateRequired",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const getAppVersion = async () => {
  console.log("getAppVersion");
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "getAppVersion",
    params: ["com.dapperwallet.dce"]
  };

  etherContract
    .executeWithParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const updateAppVersion = async (versionCode, isUpdateRequired) => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "updateApp",
    params: ["com.dapperwallet.dce", versionCode, isUpdateRequired],
    value: { amount: 5, unit: "wei" }
  };

  etherContract
    .executeWithParamsPayable(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const isUpdateRequired = async versionCode => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "isUpdateRequired",
    params: ["com.dapperwallet.dce", versionCode],
    value: { amount: 5, unit: "wei" }
  };

  etherContract
    .executeWithParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const contractValue = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "contractValue"
  };

  etherContract
    .executeNoParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const run = () => {
  // getAppVersion();

  // RESULT UP TO DATE
  // updateAppVersion(1, false);
  // RESULT UPDATE RECOMMENDED
  // updateAppVersion(2, false);
  // RESULT UPDATE REQUIRED
  // updateAppVersion(2, true);

  isUpdateRequired(1);
};

run();
