import { createStore, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './components/Store/Reducers/index';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        composeWithDevTools(
            /* logger must be the last middleware in chain to log actions */
            applyMiddleware(thunk, logger)  
        ));

export default store;