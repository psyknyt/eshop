<<<<<<< HEAD
=======
// import React, { createContext, useContext, useReducer } from "react";
// import reducer,{initialState} from './reducer';

// //preapares the data layer
// export const StateContext = createContext();

// //wrap our app and provide the data layer
// export const StateProvider = ({reducer, initialState, children}) => {
//   <StateContext.Provider value={initialState}>
//     {children}
//   </StateContext.Provider>;
// };

// // pull information form the data layer
// export const useStateValue = () => useContext(StateContext);

>>>>>>> refs/remotes/origin/main
/* THE JOB OF THIS CARDPROVIDER IS TO  MANAGE THE DATA AND 
PORVIDE IT TO THE OTHER COMPONENTS*/
import CartContext from "./CartContext";
import { useReducer } from "react";

<<<<<<< HEAD
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  console.log(state);
  let updatedItems, updatedTotalAmount;

  if (action.type === "ADD") {
    state.items.forEach((el) => {
      if (action.item.id === el.id) {
        el.quantity++;
        updatedItems = state.items.concat(action.item);
      } else {
        updatedItems = state.items.concat(action.item);
      }
    });
    // action.item.amount

    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cardReducer,
    defaultCartState
  );
  // console.log(cartState);

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: 0,
    addItem: addItemCartHandler,
    removerItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
=======
const defaultCartState={
  items:[],
  totalAmount:0,
}

const cardReducer=(state, action)=>{
  if(action.type === 'ADD'){
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
}

const CartProvider = props=>{
     
    const [cartState, dispatchCartAction] = useReducer(cardReducer,defaultCartState);
     
     const addItemCartHandler= (item)=>{
        dispatchCartAction({type:'ADD', item:item});
     }
     
     const removeItemFromCartHandler=(id)=>{
      dispatchCartAction({type:'REMOVE', id:id});
     };
  
     const cartContext={
      items:cartState.items,
      totalAmount:0,
      addItem:addItemCartHandler,
      removerItem:removeItemFromCartHandler,
     }

     return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
     );
>>>>>>> refs/remotes/origin/main
};

export default CartProvider;
