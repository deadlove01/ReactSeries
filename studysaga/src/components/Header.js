import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {searchProductList} from '../redux/product/productAction';

export const Header = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.CartData);
  console.log(cartData);


  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Comm</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(searchProductList(event.target.value))}
          placeholder="Search Product"
        />
      </div>
      <Link to={"/cart"}>
        <div className="cart-div">
          <span>{cartData.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};
