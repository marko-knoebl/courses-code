import PokemonDetails from "./PokemonDetails";
import { Pokemon } from "../Pokemon";
import { useParams } from "react-router-dom";
import { CartItem } from "../CartItem";

type PokemonViewProps = {
  pokemons: Array<Pokemon>;
  requestPokemon: (id: number) => void;
  addToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cart: Array<CartItem>;
};

function PokemonView(props: PokemonViewProps) {
  const params = useParams();

  const pokemonId = Number(params.id);
  const pokemon = props.pokemons.find((p) => p.id === pokemonId);
  if (pokemon === undefined) {
    props.requestPokemon(pokemonId);
    return <div>unknown pokemon</div>;
  }
  const cartItem = props.cart.find((item) => item.pokemonId === pokemonId);
  const quantity = cartItem?.quantity || 0;
  return (
    <PokemonDetails
      pokemon={pokemon}
      onAddToCart={(id) => {
        props.addToCart(id);
      }}
      onRemoveFromCart={props.onRemoveFromCart}
      cartQuantity={quantity}
    />
  );
}

export default PokemonView;
