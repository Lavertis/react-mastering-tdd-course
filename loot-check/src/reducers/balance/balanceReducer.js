import actionTypes from "../../actions/actionTypes";


const balanceReducer = (state = 0, action) => {
    switch (action.type) {
        case actionTypes.SET_BALANCE:
            return action.payload;
        case actionTypes.DEPOSIT:
            return state + action.payload;
        case actionTypes.WITHDRAW:
            return state - action.payload;
        default:
            return state;
    }
};

export default balanceReducer;