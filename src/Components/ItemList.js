import React from "react";
import CheckoutProduct from "./CheckoutProduct";

const ItemList = (props) => {
//   console.log(props.quantity);
  const items = props.quantity;
  return (
     <div>
        {items.map((item, index) => (
        <div key={index}>
          {/* Replace this with your actual component */}
          <CheckoutProduct data={item} detail={props.detail}/>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
