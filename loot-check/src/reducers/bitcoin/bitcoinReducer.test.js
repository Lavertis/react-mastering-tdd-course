import actionTypes from "../../actions/actionTypes";
import bitcoinReducer from "./bitcoinReducer";

describe('bitcoinReducer', function () {
    const bitcoinData = {bpi: 'bitcoin price index'};

    it('fetches and sets the bitcoin data', function () {
        const bitcoinReducerState = bitcoinReducer({}, {type: actionTypes.FETCH_BITCOIN, payload: bitcoinData});
        expect(bitcoinReducerState).toEqual(bitcoinData);
    });
});