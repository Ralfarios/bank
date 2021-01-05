let minusBalance = (dataBalFrom, inputBal, forAccId) => {
  if (!forAccId) {
    throw ('Choose account destination');
  } else if (inputBal === 0) {
    throw ('Insert amount of money');
  } else if (dataBalFrom < inputBal) {
    throw ('Insufficient balance');
  } else {
    return { balance: dataBalFrom -= inputBal };
  };
};

let plusBalance = (dataBalTo, inputBal) => {
  return {balance: dataBalTo += inputBal};
};

module.exports = { minusBalance, plusBalance };