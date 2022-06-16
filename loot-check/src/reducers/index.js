import balanceReducer from "./balance/balanceReducer";
import {combineReducers} from "redux";
import bitcoinReducer from "./bitcoin/bitcoinReducer";

export default combineReducers({
    balance: balanceReducer,
    bitcoin: bitcoinReducer
});