import {
  PRODUCT_LIST_SUCCEED,
  PRODUCT_SUBTRACT_STOCK,
  SEARCH_PRODUCT_SUCCEED,
  REMOVE_ITEM_FROM_STOCK,
} from "./productActionTypes";
import { productData } from "./productInitialState";

export const productReducer = (data = productData, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCEED:
      return [...action.data];
    case SEARCH_PRODUCT_SUCCEED:
      return [...action.data];
    case REMOVE_ITEM_FROM_STOCK:
      const newData = [...data];
      let existed = newData.find((x) => x.id === action.payload);
      if (existed) {
        if (existed.stock > 0){
            existed.stock--;
            return {
                result: true,
                data: newData
            }
        }
      }
      return { result: false};

    default:
      return data;
  }
};
