import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./actionTypes"


export const addCartAction = (payload) =>{
    console.log("call addCartAction")
    return {
        type: ADD_TO_CART,
        payload: payload
    }
}


export const removeCartAction = () =>{
    console.log("call addCartAction")
    return {
        type: REMOVE_FROM_CART
    }
}

export const clearCartAction = () =>{
    console.log("call clearCartAction")
    return {
        type: EMPTY_CART
    }
}