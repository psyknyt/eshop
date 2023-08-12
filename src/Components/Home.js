import React from "react";
import Product from "./Product";

import "../CSS/Home.css";

const Home = (props) => {

  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://cdn.wallpapersafari.com/35/61/bFJRnp.jpg"
          alt="Home"
          className="home_image"
        />
        <div className="home_row">
          <Product details={props.product_detail[0]} />
          <Product
            details={props.product_detail[1]}
          />
        </div>
        <div className="home_row">
          <Product details={props.product_detail[2]} />
          <Product details={props.product_detail[3]} />
          <Product details={props.product_detail[4]} />
        </div>
        <div className="home_row">
          <Product details={props.product_detail[5]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
