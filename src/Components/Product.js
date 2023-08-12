import React from "react";
import "../CSS/Product.css";

import { useStateValue } from "../StateProvider";
import { useContext } from "react";
import CartContext from "../CartContext";

<<<<<<< HEAD
const Product = (props) => {
  let stars = "";
  const Star = () => {
    for (let i = 1; i <= props.details.rating; i++) {
      stars += "⭐️";
    }
  };
   Star(props.details.rating);

  const cartCtx=  useContext(CartContext);
  const addToBasket = () => {
    cartCtx.addItem({
      id:+props.details.id,
      price:props.details.price,
      quantity:1,
    });
    
  }

=======
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
>>>>>>> refs/remotes/origin/main
  return (
    <React.Fragment>
      <div className="product">
        <div className="product_info">
<<<<<<< HEAD
          <p className="product_title">{props.details.title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{props.details.price}</strong>
          </p>
          <div className="product_rating">{stars}</div>
        </div>
        <img src={props.details.image} alt="" className="product_image" />
=======
          <p className="product_title">{title}</p>
          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">{stars}</div>
        </div>
        <img src={image} alt="" className="product_image" />
>>>>>>> refs/remotes/origin/main
        <button className="btn" onClick={addToBasket}>
          Add To Basket
        </button>
      </div>
    </React.Fragment>
  );
};

export default Product;
