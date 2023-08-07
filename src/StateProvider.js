/* THE JOB OF THIS CARDPROVIDER IS TO  MANAGE THE DATA AND 
PORVIDE IT TO THE OTHER COMPONENTS*/
import CartContext from "./CartContext";
import { useReducer } from "react";

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
};

export default CartProvider;
