import { RSAA } from 'redux-api-middleware';
import { message } from 'antd';

import { API_URL, AUTH_TYPES, header, tokenHeader } from '../constants';
import { LOGIN_PATH, INDEX_PATH } from '../routes';
import { saveState } from '../localStorage';
import history from '../history';

const {
    LOGIN,
    REGISTER,
    LOGOUT,
} = AUTH_TYPES.AUTH;

/**
 * User Login
 * @param {object} data - {username, email, password}
 */
const loginSuccess = (data) => (action, state, res) => {
    const contentType = res.headers.get('Content-Type');
    if (contentType && ~contentType.indexOf('json')) {
        return res.json().then((json) => {
            saveState('token', json.access);
            saveState('refresh', json.refresh);
            saveState('email', data.email);
            return json;
        });
    }
}

export const login = (data) => ({
    [RSAA]: {
        endpoint: `${API_URL}auth/jwt/create`,
        method: 'POST',
        headers: header(),
        body: JSON.stringify(data),
        types: [
            LOGIN.REQUEST,
            {
                type: LOGIN.SUCCESS,
                payload: loginSuccess(data)
            },
            LOGIN.FAILURE,
        ],
    }
});

/**
 * User Registration
 * @param {object} data - {username, email, password, code}
 */
const registerSuccess = (action, state, res) => {
    const contentType = res.headers.get('Content-Type');
    if (contentType && ~contentType.indexOf('json')) {
        return res.json().then((json) => {
            history.push(LOGIN_PATH);
            message.success('registration success, please login');
            return json;
        });
    }
}

export const register = (data) => ({
    [RSAA]: {
        endpoint: `${API_URL}auth/users/create`,
        method: 'POST',
        headers: header(),
        body: JSON.stringify(data),
        types: [
            REGISTER.REQUEST,
            {
                type: REGISTER.SUCCESS,
                payload: registerSuccess
            },
            REGISTER.FAILURE
        ],
    }
});

/**
 * User Logout
 */
export const logout = () => {
    localStorage.clear();
    history.push(INDEX_PATH);
    return {
        type: LOGOUT
    }
}

export const clearError = () => ({
    type: AUTH_TYPES.ERROR.CLEAR,
})
