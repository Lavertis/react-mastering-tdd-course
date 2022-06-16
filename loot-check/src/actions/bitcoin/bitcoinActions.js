import actionTypes from "../actionTypes";
import axios from "axios";

export const fetchBitcoin = () => {
    return dispatch => {
        return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => dispatch({type: actionTypes.FETCH_BITCOIN, payload: response.data.body}));
    };
};