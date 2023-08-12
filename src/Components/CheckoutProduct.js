import React from "react";
import "../CSS/CheckoutProduct.css";

const CheckoutProduct = (props) => {
<<<<<<< HEAD
  let numberOfitem;
=======
>>>>>>> refs/remotes/origin/main
  return (
    <React.Fragment>
      <div className="checkout_product">
        <div>
          <img
            src="https://m.media-amazon.com/images/I/31jSfjq9GJL._SX300_SY300_QL70_FMwebp_.jpg"
            alt=""
            className="checkoutProduct_img"
          />
        </div>

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">
            Dream World Bluetooth Wireless Headphone RG-518 (3)
          </p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>20</strong>
          </p>
          <div className="input_quantity">
<<<<<<< HEAD
            <label for="in_quantity">Quantity: X {numberOfitem}</label>
=======
            <label for="in_quantity">Quantity: </label>
            <input type="number" name="in_quantity" placeholder="items..."/>
>>>>>>> refs/remotes/origin/main
          </div>
          <button>Remove Item</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckoutProduct;
