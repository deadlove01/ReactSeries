import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import uuid from 'react-uuid';
import {addCartAction, clearCartAction, removeCartAction} from '../redux/action';
import {addNewItemToCartAction, getProductList, subtractProduct} from '../redux/product/productAction';

export const Main = () => {

    const dispatch = useDispatch();
    const productData = useSelector((state)=> state.ProductData);
    
    useEffect(() => {
        dispatch(getProductList());
      
    }, [])
    

    return (
        <div >
            <div>
                <button onClick={
                    () => dispatch(clearCartAction())
                }>clear Cart</button>
            </div>
                
            <div className='product-container'>
                {
                    productData && productData.map((item)=> {
                        return (
                        <div className='product-item' key={item.id}>
                            <img src={item.thumbnail} alt="" />
                            <div>Name: {item.item} </div>
                            <div>Stock: {item.rating} </div>
                            <div>Price: {item.price} </div>
                            <div>Stock: {item.stock} </div>
                            <div>
                                <button onClick={() => {
                                    dispatch(addNewItemToCartAction(item.id));
                                    // dispatch(addCartAction(item));
                                    // dispatch(subtractProduct(item.id));
                                }}>Add To Cart</button>
                                <button onClick={() => dispatch(removeCartAction(item.id))}>Remove From Cart</button>
                            </div>
                        </div>)
                })
                }
            </div>

        </div>
    )
}
