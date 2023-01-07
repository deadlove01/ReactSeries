import { PRODUCT_LIST_SUCCEED } from "./productActionTypes";
import { productData } from "./productInitialState";



export const productReducer = (data = productData, action) =>
{
    console.log("call productReducer: ",action)
    switch(action.type)
    {
        case PRODUCT_LIST_SUCCEED:
            console.log("get data succeed")
            return [...data];

        default:
            return data;
    }
}