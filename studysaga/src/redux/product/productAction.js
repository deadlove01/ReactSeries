import {  ADD_NEW_ITEM, PRODUCT_LIST_REQUESTED, PRODUCT_SUBTRACT_STOCK, SEARCH_PRODUCT_REQUESTED } from "./productActionTypes"

export const getProductList = () =>{
    console.log("call getProductList")
    return {
        type: PRODUCT_LIST_REQUESTED
    }
}

export const searchProductList = (query) =>{
    return {
        type: SEARCH_PRODUCT_REQUESTED,
        query
    }
}

export const subtractProduct = (payload) => {
    return {
        type: PRODUCT_SUBTRACT_STOCK,
        payload
    }
}

export const addNewItemToCartAction = (payload) =>{
    return {
        type: ADD_NEW_ITEM,
        payload
    }
}