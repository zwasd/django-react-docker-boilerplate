import { AUTH_TYPES } from '../constants';

const { LOGIN, REGISTER } = AUTH_TYPES.AUTH;


export const token = (state=null, action) => {
    switch (action.type) {
        case LOGIN.SUCCESS:
            return action.payload.access;
        default:
            return state;
    }
}

export const refresh = (state=null, action) => {
    switch (action.type) {
        case LOGIN.SUCCESS:
            return action.payload.refresh;
        default:
            return state;
    }
}

export const error = (state=null, action) => {
    switch (action.type) {
        case LOGIN.FAILURE:
        case REGISTER.FAILURE:
            return action.payload.response;
        case AUTH_TYPES.ERROR.CLEAR:
            return null;
        default:
            return state;
    }
}