import React from "react";
import "../CSS/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = (props) => {
  console.log(props);
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ee5a127f-6e1f-42c7-ac7a-a376a5a2310c.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
