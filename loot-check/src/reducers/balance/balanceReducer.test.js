import balanceReducer from './balanceReducer';
import balanceReducer2 from './balanceReducer';
import actionTypes from "../../actions/actionTypes";

describe('balanceReducer', function () {
    describe('when initializing', function () {
        const balance = 10;

        it('sets a balance', function () {
            const action = {type: actionTypes.SET_BALANCE, payload: balance};
            expect(balanceReducer(undefined, action)).toEqual(balance);
        });

        describe('then re-initializing', function () {
            it('reads the balance from cookies', function () {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
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