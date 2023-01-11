import { PRODUCT_LIST_SUCCEED, SEARCH_PRODUCT_SUCCEED } from "./productActionTypes";
import { productData } from "./productInitialState";



export const productReducer = (data = productData, action) =>
{
    switch(action.type)
    {
        case PRODUCT_LIST_SUCCEED:
            return [...action.data];
        case SEARCH_PRODUCT_SUCCEED:
            return [...action.data];

        default:
            return data;
    }
}