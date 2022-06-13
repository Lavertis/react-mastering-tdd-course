import actionTypes from "../../actions/actionTypes";
import Cookies from "js-cookie";

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balanceReducer = (state = 0, action) => {
    let balance;
    switch (action.type) {
        case actionTypes.SET_BALANCE:
            balance = action.payload;
            break;
        case actionTypes.DEPOSIT:
            balance = state + action.payload;
            break;
        case actionTypes.WITHDRAW:
            balance = state - action.payload;
            break;
        default:
            balance = parseInt(Cookies.get(BALANCE_COOKIE), 10) || state;
    }

    Cookies.set(BALANCE_COOKIE, balance);
    return balance;
};

export default balanceReducer;