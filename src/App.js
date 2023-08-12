import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import React from "react";

import Home from "./Components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartProvider from "./StateProvider";

function App() {
<<<<<<< HEAD

  const prod_details=[
    {
      id:1123123321,
      title:'Dream World Bluetooth Wireless Headphone RG-518 (3)',
      price:24,
      rating:4,
      image:'https://m.media-amazon.com/images/I/31jSfjq9GJL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id:1123123321,
      title:'Fire-Boltt Ninja 3 Smartwatch Full Touch 1.69 & 60 Sports Modes with IP68, Sp02 Tracking',
      price:50,
      rating:4,
      image:'https://m.media-amazon.com/images/I/61ZgWdNPmfL._SX522_.jpg',
    },
    {
      id:1123123321,
      title:'Noise ColorFit Pulse Grand Smart Watch with 1.69" HD Display, 60 Sports Modes',
      price:18,
      rating:4,
      image:'https://m.media-amazon.com/images/I/618mFEP9mTL._SX679_.jpg'
    },
    {
      id:1123123321,
      title:'Dream World Bluetooth Wireless Headphone RG-518 (3)',
      price:24,
      rating:4,
      image:'https://m.media-amazon.com/images/I/31SjuYsFAXL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id:1123123321,
      title:'ASTOUND Bluetooth Wireless Earphones Earbuds Headphones',
      price:24,
      rating:4,
      image:'https://m.media-amazon.com/images/I/51pQeFfwiCL._SX355_.jpg',
    },
    {
      id:1123123331,
      title:'Lenovo Ideapad Gaming 3 AMD Ryzen 5 5600H 15.6" (39.62cm)',
      price:749,
      rating:4,
      image:'https://m.media-amazon.com/images/I/71--IQUHVwL._SX679_.jpg',
    },
  ]

=======
>>>>>>> refs/remotes/origin/main
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
<<<<<<< HEAD
                <Home product_detail={prod_details}/>
=======
                <Home />
>>>>>>> refs/remotes/origin/main
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/Checkout"
            element={
              <React.Fragment>
                <Header />
<<<<<<< HEAD
                <Checkout  product_detail={prod_details}/>
=======
                <Checkout />
>>>>>>> refs/remotes/origin/main
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
