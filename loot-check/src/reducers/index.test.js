import reducers from "./index";

describe('reducers', function () {
    it('initializes the default state', function () {
        expect(reducers({}, {})).toEqual({balance: 0, bitcoin: {}});
    });
});