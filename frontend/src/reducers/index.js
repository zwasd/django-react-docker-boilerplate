import { combineReducers } from 'redux';

import * as auth from './auth';
import { AUTH_TYPES } from '../constants';


const rootReducer = (state, action) => {
    switch (action.type) {
        case AUTH_TYPES.AUTH.LOGOUT:
            state = undefined;
            break;
    }

    return combineReducers({
        auth: combineReducers(auth),
    })(state, action);
};

export default rootReducer;