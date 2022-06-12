import * as constants from '../constants';
import * as actions from './balance';

it('creates an action to set the balance', function () {
    const balance = 0;
    const expectedAction = {type: constants.SET_BALANCE, payload: balance};
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});