import {  PRODUCT_LIST_REQUESTED } from "./productActionTypes"

export const getProductList = () =>{
    console.log("call getProductList")
    return {
        type: PRODUCT_LIST_REQUESTED
    }
}

