import "./App.css";
import Header from "./Components/Header";
import Checkout from "./Components/Checkout";
import React from "react";

import Home from "./Components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartProvider from "./StateProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Home />
              </React.Fragment>
            }
          ></Route>
          <Route
            path="/Checkout"
            element={
              <React.Fragment>
                <Header />
                <Checkout />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
