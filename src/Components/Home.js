import React from "react";
<<<<<<< HEAD
import Product from "./Product";
=======
import Product from './Product';
>>>>>>> refs/remotes/origin/main

import "../CSS/Home.css";

const Home = (props) => {
<<<<<<< HEAD

  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://cdn.wallpapersafari.com/35/61/bFJRnp.jpg"
=======
  return (
    <div className="home">
      <div className="home_container">
        <img src='https://cdn.wallpapersafari.com/35/61/bFJRnp.jpg'
>>>>>>> refs/remotes/origin/main
          alt="Home"
          className="home_image"
        />
        <div className="home_row">
<<<<<<< HEAD
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
=======
        <Product 
             id={1123123321}
             title='Dream World Bluetooth Wireless Headphone RG-518 (3)'
             price={24}
             rating={4}
             image='https://m.media-amazon.com/images/I/31jSfjq9GJL._SX300_SY300_QL70_FMwebp_.jpg'
             />
            <Product 
             id={1123123321}
             title='Fire-Boltt Ninja 3 Smartwatch Full Touch 1.69 & 60 Sports Modes with IP68, Sp02 Tracking'
             price={50}
             rating={4}
             image='https://m.media-amazon.com/images/I/61ZgWdNPmfL._SX522_.jpg'
             />
        </div>
        <div className="home_row">
        <Product 
             id={1123123321}
              title='Noise ColorFit Pulse Grand Smart Watch with 1.69" HD Display, 60 Sports Modes'
             price={18}
             rating={4}
             image='https://m.media-amazon.com/images/I/618mFEP9mTL._SX679_.jpg'
             />
             <Product 
             id={1123123321}
             title='Dream World Bluetooth Wireless Headphone RG-518 (3)'
             price={24}
             rating={4}
             image='https://m.media-amazon.com/images/I/31SjuYsFAXL._SX300_SY300_QL70_FMwebp_.jpg'
             />
             <Product 
             id={1123123321}
             title='ASTOUND Bluetooth Wireless Earphones Earbuds Headphones'
             price={24}
             rating={4}
             image='https://m.media-amazon.com/images/I/51pQeFfwiCL._SX355_.jpg'
             />
        </div>
        <div className="home_row">
        <Product 
             id={1123123331}
             title='Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6" (39.62cm)'
             price={749}
             rating={4}
             image='https://m.media-amazon.com/images/I/71--IQUHVwL._SX679_.jpg'
             />
>>>>>>> refs/remotes/origin/main
        </div>
      </div>
    </div>
  );
};

export default Home;
