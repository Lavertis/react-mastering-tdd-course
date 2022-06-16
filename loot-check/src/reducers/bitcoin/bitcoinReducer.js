import actionTypes from "../../actions/actionTypes";

const bitcoinReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BITCOIN:
            return action.payload;
        default:
            return state;
    }
};

export default bitcoinReducer;