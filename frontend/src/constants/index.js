import actionTypeCreator, { SYNC, ASYNC } from 'redux-action-types-creator';
import { loadState } from '../localStorage';


export const API_URL = 'http://127.0.0.1:8000/api/v1/';

export const header = (data={}) => ({
    ...data,
    'Content-Type': 'application/json'
})

export const tokenHeader = (data={}) => {
    const token = loadState('token');
    if (token && token.indexOf('JWT') > -1) {
        return header({ ...data, 'Authorization': token });
    } else {
        return header({ ...data, 'Authorization': `JWT ${token}` });
    }
}


// action types constants
const actionType = actionTypeCreator('APP');

export const AUTH_TYPES = actionType({
    AUTH: {
        LOGIN: ASYNC,
        REGISTER: ASYNC,
        LOGOUT: SYNC,
    },
    ERROR: {
        CLEAR: SYNC,
    }
})
