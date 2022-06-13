import * as balanceActions from './balanceActions';
import actionTypes from "../actionTypes";

it('creates an action to set the balance', function () {
    const newBalance = 10;
    const expectedAction = {type: actionTypes.SET_BALANCE, payload: newBalance};
    expect(balanceActions.setBalance(newBalance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', function () {
    const depositAmount = 10;
    const expectedAction = {type: actionTypes.DEPOSIT, payload: depositAmount};
    expect(balanceActions.deposit(depositAmount)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', function () {
    const withdrawalAmount = 10;
    const expectedAction = {type: actionTypes.WITHDRAW, payload: withdrawalAmount};
    expect(balanceActions.withdraw(withdrawalAmount)).toEqual(expectedAction);
});