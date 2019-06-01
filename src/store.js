import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './components/Store/Reducers/index';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        compose(applyMiddleware(thunk, logger), 
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;