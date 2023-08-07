import React from "react";
import "../CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
 
import { useContext } from "react";
import CartContext from "../CartContext";

const Subtotal = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems= cartCtx.items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  },0);
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items): <strong>${numberOfCartItems}</strong>
      </p>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
      {/* // decimalScale={2}
        // value={0}
        // displayType={"text"}
        // thousandSeparator={true} */}
    </div>
  );
};

export default Subtotal;
