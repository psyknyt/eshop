import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  reoveItem: (id) => {},
});

export default CartContext;
