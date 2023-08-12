/* THE JOB OF THIS CARDPROVIDER IS TO  MANAGE THE DATA AND 
PORVIDE IT TO THE OTHER COMPONENTS*/
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    function sumItemsById(arr) {
      const sumById = {};

      for (const obj of arr) {
        const id = obj.id;
        const price = obj.price;
        const quantity = obj.quantity;

        if (!sumById[id]) {
          sumById[id] = { id, price: 0, quantity: 0 };
        }

        sumById[id].price = price;
        sumById[id].quantity += quantity;
      }

      return Object.values(sumById);
    }

    const summedQuantities = sumItemsById(state.items.concat(action.item));
    const summedQuantitiesArray = summedQuantities.map((id) => ({ ...id }));
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    return {
      items: [...summedQuantitiesArray],
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {

    const existingItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemsIndex];
    const updatedAmount= state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.quantity ===1){
      updatedItems = state.items.filter(item=>item.id !== action.id);
    }
    else{
      const updatedItem={...existingItem, quantity:existingItem.quantity-1};
      updatedItems=[...state.items];
      updatedItems[existingItemsIndex] = updatedItem;
    }
    return {
      items:updatedItems,
      totalAmount:updatedAmount,
    }
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cardReducer,
    defaultCartState
  );
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
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
