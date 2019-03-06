import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import SignUpPage from '../containers/SignUpPage';
import PageNotFound from '../containers/PageNotFound';

export const INDEX_PATH = '/';
export const LOGIN_PATH = '/login';
export const SIGNUP_PATH = '/signup';
export const PAGE_NOT_FOUND = '*';

export const routes = [
    { 
        path: INDEX_PATH, 
        component: HomePage, 
        routeType: Route 
    },
    { 
        path: LOGIN_PATH, 
        component: LoginPage, 
        routeType: UnauthenticatedRoute 
    },
    { 
        path: SIGNUP_PATH, 
        component: SignUpPage, 
        routeType: UnauthenticatedRoute 
    },
    { 
        path: PAGE_NOT_FOUND, 
        component: PageNotFound,
        routeType: Route
    },
]