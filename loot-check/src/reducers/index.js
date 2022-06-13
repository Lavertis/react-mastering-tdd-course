import balanceReducer from "./balance/balanceReducer";
import {combineReducers} from "redux";

export default combineReducers({
    balance: balanceReducer
});