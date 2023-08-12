import React from "react";
import { useContext } from "react";
import CartContext from "../CartContext";
import "../CSS/CheckoutProduct.css";

const CheckoutProduct = (props) => {
  const id = props.data.id;
  const details = props.detail;

  let obj = {};
  props.detail.forEach((element) => {
    if (element.id === id) {
      obj = element;
    }
  });
  const cartCtx=useContext(CartContext);
  const removeItem = (props) => {
    cartCtx.removeItem(obj.id);
  };
  return (
    <div className="checkout_product">
      <div>
        <img src={obj.image} alt="" className="checkoutProduct_img" />
      </div>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{obj.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{obj.price}</strong>
        </p>
        <div className="input_quantity">
          <label for="in_quantity">Quantity: {props.data.quantity}</label>
        </div>
        <button onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
