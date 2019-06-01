import {combineReducers} from 'redux';
import reducer from './Reducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
const appReducer =combineReducers({
    errors:errorReducer,
    auth: authReducer,
    reducer,
})
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
      state = undefined
    }
  
    return appReducer(state, action)
}  
export default rootReducer;