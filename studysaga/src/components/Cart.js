import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartData = useSelector((state) => state.CartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price * item.stock).reduce((prev, next) => prev + next);
  console.log(amount);

  return (
    <div>
      <Link to="/">Go to Products Link</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Item Count</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
            </tr>
          </thead>
          <tbody>
            {cartData &&
              cartData.map((item, i) => (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.stock}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
