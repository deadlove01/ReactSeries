import React from 'react'
import { useSelector } from 'react-redux'


export const Header = () => {

    const cartData = useSelector(state => state.CartData)
    console.log(cartData);

  return (
    <div className="header">
    <div className="cart-div">
        <span>{cartData.length}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
    </div>
</div>


  )
}
