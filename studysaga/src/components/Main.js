import React from 'react'
import {useDispatch} from 'react-redux'
import uuid from 'react-uuid';
import {addCartAction, clearCartAction, removeCartAction} from '../redux/action';
import { getProductList } from '../redux/product/productAction';

export const Main = () => {

    const dispatch = useDispatch();
    const product = {
        id: undefined,
        name: "product 1",
        price: 50,
        category: "bestseller"
    }

    console.log(product);

    return (
        <div className="">
            <button onClick={
                () => dispatch(addCartAction({
                    ... product,
                    id: uuid()
                }))
            }>Add to Cart</button>

            <button onClick={
                () => dispatch(removeCartAction())
            }>Remove item from Cart</button>

            <button onClick={
                () => dispatch(clearCartAction())
            }>clear Cart</button>

<button onClick={
                () => dispatch(getProductList())
            }>get product list</button>
        </div>
    )
}
