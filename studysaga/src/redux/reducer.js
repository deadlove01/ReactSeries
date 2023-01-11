import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./actionTypes"
import { cartState } from "./initialState"

export const CartReducer = (data = cartState, action) =>{
    switch(action.type)
    {
        case ADD_TO_CART:
            console.log("action type add to cart")
            return [...data, action.payload];
        case REMOVE_FROM_CART:
            console.log("action type REMOVE_FROM_CART")
            const newData = data.filter(x => x.id !== action.payload)
            console.log(newData)
            return [...newData];
            case EMPTY_CART:
                console.log("action clear cart");
                data = [];
                return [...data];
        default:
            return data;
    }
}


export const TestReducer = (data = [], action) =>{

    return data;
}