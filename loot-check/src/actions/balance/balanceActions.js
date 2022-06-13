import actionTypes from "../actionTypes";

export const setBalance = newBalance => {
    return {type: actionTypes.SET_BALANCE, payload: newBalance};
};

export const deposit = depositAmount => {
    return {type: actionTypes.DEPOSIT, payload: depositAmount};
};

export const withdraw = withdrawalAmount => {
    return {type: actionTypes.WITHDRAW, payload: withdrawalAmount};
};