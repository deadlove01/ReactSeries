import { combineReducers } from "redux";
import { productReducer } from "./product/productReducer";
import { CartReducer, TestReducer } from './reducer'
import { UserReducer } from './userReducer'


export default combineReducers({
    CartData: CartReducer,
    ProductData: productReducer,
    TestReducer,
    UserReducer
})