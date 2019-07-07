const etherTransactions = require("../ethereum/etherTransaction");
const etherContract = require("../ethereum/etherContract");

const estimatesFeesSuccess = async () => {
  console.log("estimateFeesSuccess");
  const request = {
    network: "kovan",
    address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
    value: { amount: "1", unit: "gwei" }
  };

  try {
    var data = await etherTransactions.estimateFees(request);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
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
  estimatesFeesSuccess();
  // estimatesFeesFail();
  // transactionStatusSuccess();
  // transactionStatusFail();
  // sendTransactionStatusSuccess();
  // sendTransactionStatusFail();
  // sendTransactionWatch();
};

run();
