import balanceReducer from './balanceReducer';
import actionTypes from "../../actions/actionTypes";

describe('balanceReducer', function () {
    it('sets a balance', function () {
        const balance = 10;
        const action = {type: actionTypes.SET_BALANCE, payload: balance};
        expect(balanceReducer(undefined, action)).toEqual(balance);
    });

    it('deposits into the balance', function () {
        const initialBalance = 5;
        const depositAmount = 10;
        const action = {type: actionTypes.DEPOSIT, payload: depositAmount};
        expect(balanceReducer(initialBalance, action)).toEqual(initialBalance + depositAmount);
    });

    it('withdraws from the balance', function () {
        const initialBalance = 20;
        const withdrawalAmount = 5;
        const action = {type: actionTypes.WITHDRAW, payload: withdrawalAmount};
        expect(balanceReducer(initialBalance, action)).toEqual(initialBalance - withdrawalAmount);
    });
});