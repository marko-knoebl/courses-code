import { useContext } from "react";
import CartContext from "../CartContext";
import { Pokemon } from "../Pokemon";
import CartItemComponent from "./CartItemComponent";

type CartViewProps = {
  pokemons: Array<Pokemon>;
};

function CartView(props: CartViewProps) {
  const cartContext = useContext(CartContext);

  if (cartContext.cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }
  return (
    <div>
      {cartContext.cart.map((item) => {
        const pokemon = props.pokemons.find((p) => p.id === item.pokemonId);
        if (!pokemon) {
          return <div>pokemon {item.pokemonId} not found</div>;
        }
        return (
          <CartItemComponent
            pokemon={pokemon}
            pokemonId={item.pokemonId}
            quantity={item.quantity}
            key={item.pokemonId}
          />
        );
      })}
    </div>
  );
}

export default CartView;
