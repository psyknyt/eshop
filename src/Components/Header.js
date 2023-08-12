import React, { Fragments } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../CartContext";

const Header = (props) => {
  // const [{basket}, dispatch]=useStateValue();
  const cartCtx = useContext(CartContext);
  const numberOfitems = cartCtx.items.reduce((accumulator, curr) => {
    return accumulator + curr.quantity;
  }, 0);

  return (
    <React.Fragment>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none", color: "#ff9f00" }}>
          <div className="header_logo">
            <StorefrontIcon className="header_logo_image" fontSize="large" />
            <h1 className="header_logo_title">eShop</h1>
          </div>
        </Link>

        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_seacrh_icon" />
        </div>
        <div className="header_nav">
          <div className="nav__item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineTwo">Sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Shop</span>
          </div>
          <Link
            to="/Checkout"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="nav__item shopping">
              <ShoppingBasketIcon
                className="shopping_basket"
                fontSize="large"
              />
              <span className="nav_itemLineTwo">{numberOfitems}</span>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
