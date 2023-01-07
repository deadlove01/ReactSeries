import { combineReducers } from "redux";
import { CartReducer, TestReducer } from './reducer'
import { UserReducer } from './userReducer'


export default combineReducers({
    CartData: CartReducer,
    TestReducer,
    UserReducer
})