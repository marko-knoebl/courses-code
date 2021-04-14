import { createContext } from "react";
import { CartItem } from "./CartItem";

type CartContextType = {
  cart: Array<CartItem>;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext({} as CartContextType);

export default CartContext;
