import * as actions from '../../actions/constants';

const balanceReducer = (state = 0, action) => {
    switch (action.type) {
        case actions.SET_BALANCE:
            return action.payload;
        default:
            return state;
    }
};

export default balanceReducer;