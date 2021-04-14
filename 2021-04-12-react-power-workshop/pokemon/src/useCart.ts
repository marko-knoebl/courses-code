import { useState } from "react";
import { CartItem } from "./CartItem";

export function useCart() {
  const [cart, setCart] = useState<Array<CartItem>>([]);

  const addToCart = (id: number) => {
    const index = cart.findIndex((item) => item.pokemonId === id);
    if (index === -1) {
      setCart([...cart, { pokemonId: id, quantity: 1, size: 0 }]);
    } else {
      setCart(
        cart.map((item, idx) => idx === index ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const removeFromCart = (id: number) => {
    const index = cart.findIndex((item) => item.pokemonId === id);
    if (index !== -1) {
      setCart(
        cart
          .map((item, idx) => idx === index ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity >= 1)
      );
    }
  };
  return { cart, addToCart, removeFromCart };
}
