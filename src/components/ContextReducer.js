import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispachContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state,{id: action.id,name: action.name,qty: action.qty,size: action.size,price: action.price,img: action.img,},];

    default:
      console.log("Error in Reducer");
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispach] = useReducer(reducer, []);
  return (
    <CartDispachContext.Provider value={dispach}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispachContext.Provider>
  );
};
export const useCart = () => useContext(CartStateContext);
export const useDispachCart = () => useContext(CartDispachContext);
