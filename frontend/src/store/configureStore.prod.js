import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';

import { messageMiddleware } from '../middlewares';
import rootReducer from '../reducers';
import { loadState } from '../localStorage';
import history from '../history';


const reduxRouterMiddleware = routerMiddleware(history);

export const configureStore = () => {
    const persistedState = { token: loadState('token') };
    
    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(
            apiMiddleware,
            messageMiddleware,
            reduxRouterMiddleware
        )
    );

    return store;
}