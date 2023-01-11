import {  PRODUCT_LIST_REQUESTED, SEARCH_PRODUCT_REQUESTED } from "./productActionTypes"

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