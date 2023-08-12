import React from "react";
import "../CSS/Product.css";

import { useStateValue } from "../StateProvider";
import { useContext } from "react";
import CartContext from "../CartContext";

const Product = ({id,title,price,rating,image}) => {
  let stars = "";
  const Star = () => {
    for (let i = 1; i <= rating; i++) {
      stars += "⭐️";
    }
  };
  Star(rating);

  const cartCtx=  useContext(CartContext);
  const addToBasket = () => {
    cartCtx.addItem({
      id:+id,
      price:price,
      amount:price,
    });
  }

  return (
    <React.Fragment>
      <div className="product">
        <div className="product_info">
          <p className="product_title">{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">{stars}</div>
        </div>
        <img src={image} alt="" className="product_image" />
        <button className="btn" onClick={addToBasket}>
          Add To Basket
        </button>
      </div>
    </React.Fragment>
  );
};

export default Product;
