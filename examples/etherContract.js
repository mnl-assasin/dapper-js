const etherContract = require("../ethereum/etherContract");

const privateKey =
  "0x7a7ac95588a98d1203f4781e3aa3fcc3e86c81edd637257b34393e7e602ded36";
const network = "ropsten";
const address = "0x275a104783419cf675addd57ac3d92e822a30fcf";
const abi = [
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
        type: "int256"
      },
      {
        name: "_isEmployed",
        type: "bool"
      }
    ],
    name: "payable3Params",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "nonPayableNoParam",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "age",
    outputs: [
      {
        name: "",
        type: "int256"
      }
    ],
    payable: false,
    stateMutability: "view",
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
        type: "int256"
      },
      {
        name: "_isEmployed",
        type: "bool"
      }
    ],
    name: "nonPayable3Params",
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
    name: "nonPayable1Param",
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
    name: "payable1Param",
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
    inputs: [],
    name: "payableView",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
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
        type: "int256"
      }
    ],
    name: "payable2Params",
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
        type: "int256"
      }
    ],
    name: "nonPayable2Params",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "isEmployed",
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

const name = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "name"
  };

  etherContract
    .executeNoParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const age = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "age"
  };

  etherContract
    .executeNoParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const isEmployed = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "isEmployed"
  };

  etherContract
    .executeNoParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const nonPayable1Param = async () => {
  console.log("nonPayable1Param");
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "nonPayable1Param",
    params: ["Mykel Neds Leano"]
  };

  etherContract
    .executeWithParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const nonPayable2Params = async () => {
  console.log("nonPayable2Params");
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "nonPayable2Params",
    params: ["Mykel Neds Leano", 24]
  };

  etherContract
    .executeWithParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const nonPayable3Params = async () => {
  console.log("nonPayable3Params");
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "nonPayable3Params",
    params: ["Mykel Neds", 24, true]
  };

  etherContract
    .executeWithParams(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const payableNoParam = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "payableNoParam",
    value: "5"
  };

  etherContract
    .executeNoParamsPayable(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const payable1Param = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "payable1Param",
    params: ["Mykel Neds Leano"],
    value: "5"
  };

  etherContract
    .executeWithParamsPayable(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const payable2Params = async () => {
  const request = {
    privateKey,
    network,
    address,
    abi,
    method: "payable2Params",
    params: ["Mykel Neds", 26],
    value: "5"
  };

  etherContract
    .executeWithParamsPayable(request)
    .then(data => console.log(data))
    .catch(error => console.log(error));
};

const run = () => {
  console.log("run etherContract");
  name();
  age();
  //   isEmployed();
  //   nonPayable1Param();
  //   nonPayable2Params();
  //   nonPayable3Params();
  //   payableNoParam();
  //   payable1Param();
  //   payable2Params();
};

run();
