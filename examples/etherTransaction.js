
const etherTransactions = require('../ethereum/etherTransaction');


const estimatesFeesSuccess = async () => {
    const request = {
        network: "kovan",
        address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
        value: "1000000",
    };
    
    await etherTransactions.estimateFees(request)
};

const estimatesFeesFail = async () => {
    const request = {
        address: "0x99bf3180c1ffaf070c34326cded67aba23ff409f",
    };
    try {
        await etherTransactions.estimateFees(request)
    } catch(e) {
        console.log(e);
    }
};

const transactionStatusSuccess = async () => {
    const request = {
        network: "rinkeby",
        transactionHash: "0x44223f10a9f1225d38d098a21697239b4c99c32739713c15cfa57f1819b8ec30"
    };

    try {
        const result = await etherTransactions.status(request);

        console.log(result);
    } catch(e) {
        console.log(e);
    }
}

const transactionStatusFail = async () => {
    const request = {
        transactionHash: "0x44223f10a9f1225d38d098a21697239b4c99c32739713c15cfa57f1819b8ec30"
    };

    try {
        const result = await etherTransactions.status(request);

        console.log(result);
    } catch(e) {
        console.log(e);
    }
}

const run = () => {
    estimatesFeesSuccess();
    estimatesFeesFail();

    transactionStatusSuccess();
    transactionStatusFail();
}

run();
