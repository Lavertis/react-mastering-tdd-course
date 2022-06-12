import balanceReducer from './balanceReducer';
import * as actions from '../../actions/constants';

describe('balanceReducer', function () {
    it('sets a balance', function () {
        const balance = 10;
        const action = {type: actions.SET_BALANCE, payload: balance};
        expect(balanceReducer(undefined, action)).toEqual(balance);
    });
});