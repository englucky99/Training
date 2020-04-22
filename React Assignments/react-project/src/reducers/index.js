import {loginReducer,registerReducer} from './login';
import TodoReducer from './todos'
import {combineReducers} from 'redux';


const appReducers =combineReducers({
    login:loginReducer,
    register:registerReducer,
    todo:TodoReducer
})

export default appReducers;