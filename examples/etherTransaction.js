const etherTransactions = require("../ethereum/etherTransaction");
const etherContract = require("../ethereum/etherContract");

const privateKey =
  "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36";
const network = "ropsten";
const contractAddress = "0x7c23d29c8c75f47f4e5565f2dd136df73dda4164";
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      },
      {
        name: "_age",
        type: "uint256"
      }
    ],
    name: "doubleParam",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      },
      {
        name: "_age",
        type: "uint256"
      }
    ],
    name: "doubleParamPayable",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "payableNoParam",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      }
    ],
    name: "singleParam",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      }
    ],
    name: "singleParamPayable",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      },
      {
        name: "_age",
        type: "uint256"
      },
      {
        name: "_employed",
        type: "bool"
      }
    ],
    name: "tripleParam",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      },
      {
        name: "_age",
        type: "uint256"
      },
      {
        name: "_employed",
        type: "bool"
      }
    ],
    name: "tripleParamPayable",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_name",
        type: "string"
      },
      {
        name: "_age",
        type: "uint256"
      },
      {
        name: "_employed",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    constant: true,
    inputs: [],
    name: "age",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

const getName = async () => {
  const request = {
    privateKey,
    network,
    address: contractAddress,
    abi,
    method: "name"
  };

  etherContract.executeNoParams(request).then(data => console.log(data));
};

const getAge = async () => {
  const request = {
    privateKey,
    network,
    address: contractAddress,
    abi,
    method: "age"
  };

  etherContract.executeNoParams(request).then(data => console.log(data));
};

const singleParam = async () => {
  console.log("singleParam");
  const request = {
    privateKey,
    network,
    address: contractAddress,
    abi,
    method: "singleParam",
    params: ["Mykel Neds"]
  };

  etherContract
    .executeWithParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const singleParamPayable = async () => {
  console.log("singleParamPayable");
  const request = {
    privateKey,
    network,
    address: contractAddress,
    abi,
    method: "singleParamPayable",
    params: ["Mykel Neds Leano"],
    value: "1"
  };

  etherContract
    .executeWithParamsPayable(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const payableNoParam = async () => {
  console.log("payableNoParam");
  const request = {
    privateKey,
    network,
    address: contractAddress,
    abi,
    method: "payableNoParam",
    value: "10"
  };

  etherContract
    .executeNoParamsPayable(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const estimatesFeesSuccess = async () => {
  console.log("estimateFeesSuccess");
  const request = {
    network: "kovan",
    address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
    value: "1000000"
  };

  var data = await etherTransactions.estimateFees(request);
  console.log(data);
};

const estimatesFeesFail = async () => {
  const request = {
    address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f"
  };
  try {
    await etherTransactions.estimateFees(request);
  } catch (e) {
    console.log(e);
  }
};

const transactionStatusSuccess = async () => {
  // const request = {
  //     network: "rinkeby",
  //     transactionHash: "0x44223f10a9f1225d38d098a21697239b4c99c32739713c15cfa57f1819b8ec30"
  // };

  const request = {
    network: "rinkeby",
    transactionHash:
      "0x52d45ab4502244370437aa174970050ddd3d7628b7eb5ea23eb6123e0226f4a2"
  };

  try {
    const result = await etherTransactions.status(request);

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const transactionStatusFail = async () => {
  const request = {
    transactionHash:
      "0x44223f10a9f1225d38d098a21697239b4c99c32739713c15cfa57f1819b8ec30"
  };

  try {
    const result = await etherTransactions.status(request);

    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

const sendTransactionStatusSuccess = async () => {
  const request = {
    network: "rinkeby",
    privateKey:
      "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36",
    address: "0xb437C3F1b2ca60362cC22B42e3E20cBA47Fe2ca7",
    value: "1",
    gasLimit: "21000"
  };

  try {
    const result = await etherTransactions.send(request);

    console.log("SEND TRANSACTION", result);
  } catch (e) {
    console.log(e);
  }
};

const sendTransactionStatusFail = async () => {
  const request = {
    network: "rinkeby",
    privateKey:
      "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36",
    address: "0xb437C3F1b2ca60362cC22B42e3E20cBA47Fe2ca7",
    value: "50",
    gasLimit: "21000"
  };

  try {
    const result = await etherTransactions.send(request);

    console.log("SEND TRANSACTION FAIL", result);
  } catch (e) {
    console.log(e);
  }
};

const sendTransactionWatch = async () => {
  const request = {
    network: "rinkeby",
    privateKey:
      "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36",
    address: "0xb437C3F1b2ca60362cC22B42e3E20cBA47Fe2ca7",
    value: "1",
    gasLimit: "21000"
  };
  const ee = await etherTransactions.sendAndWatchStatus(request);

  ee.on("sent", sent => {
    console.log("MESSAGE: ", sent);
  });

  ee.on("error", error => {
    console.log("MESSAGE: ", error);
  });

  ee.on("pending", pending => {
    console.log("PENDING MESSAGE: ", pending);
  });

  ee.on("fail", fail => {
    console.log("FAIL MESSAGE: ", fail);
  });

  ee.on("success", success => {
    console.log("MESSAGE: ", success);
  });
};

const run = () => {
  // getName();
  getAge();
  // payableNoParam();
  // singleParam();
  // singleParamPayable();
  // estimatesFeesSuccess();
  // estimatesFeesFail();
  // transactionStatusSuccess();
  // transactionStatusFail();
  // sendTransactionStatusSuccess();
  // sendTransactionStatusFail();
  // sendTransactionWatch();
};

// run();
