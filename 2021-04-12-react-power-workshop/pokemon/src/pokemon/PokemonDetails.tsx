/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Pokemon } from "../Pokemon";

type PokemonDetailsProps = {
  pokemon: Pokemon;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  cartQuantity: number;
};

function PokemonDetails(props: PokemonDetailsProps) {
  return (
    <div
      css={css`
        border-radius: 8px;
        background-color: #f0f0f0;
        margin: 8px;
        padding: 8px;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
      `}
    >
      <img
        src={props.pokemon.artworkImg}
        alt={props.pokemon.name}
        css={css`
          max-width: 90vw;
        `}
      />
      <div>
        {props.cartQuantity === 0 ? (
          <button onClick={() => props.onAddToCart(props.pokemon.id)}>
            add to cart
          </button>
        ) : (
          <>
            <button onClick={() => props.onRemoveFromCart(props.pokemon.id)}>
              -
            </button>
            {props.cartQuantity}
            <button onClick={() => props.onAddToCart(props.pokemon.id)}>
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PokemonDetails;
