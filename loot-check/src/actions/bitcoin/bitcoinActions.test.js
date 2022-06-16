import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from "../actionTypes";
import moxios from "moxios";
import {fetchBitcoin} from "./bitcoinActions";

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});

const mockResponse = {body: {bpi: 'bitcoin price index'}};

beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install();
});

afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall();
});

it('creates an async action to fetch the bitcoin value', () => {
    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: mockResponse
        });
    });

    const expectedActions = [{payload: mockResponse.body, type: actionTypes.FETCH_BITCOIN}];
    return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});