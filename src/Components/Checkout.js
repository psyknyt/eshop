import React from "react";
import "../CSS/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

<<<<<<< HEAD
import { useContext } from "react";
import CartContext from "../CartContext";

const Checkout = (props) => {
  let count=0;
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx);
  let arr= cartCtx.items;
  console.log(arr);

=======
const Checkout = (props) => {
  console.log(props);
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
          <CheckoutProduct arra={arr}/>
=======
          <CheckoutProduct />
>>>>>>> refs/remotes/origin/main
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
