/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

import { Pokemon } from "../Pokemon";

type CartItemComponentProps = {
  pokemonId: number;
  pokemon: Pokemon;
  quantity: number;
};

function CartItemComponent(props: CartItemComponentProps) {
  return (
    <div>
      <article
        css={css`
          display: flex;
          justify-content: space-between;
          background-color: #f0f0f0;
          border-radius: 8px;
          padding: 8px;
          margin: 8px;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
        `}
      >
        <div>
          <h1>{props.pokemon.name}</h1>
          <NavLink to={`/pokemon/${props.pokemonId}`}>product page</NavLink>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <h1>{props.quantity}x</h1>
          <img src={props.pokemon.frontImg} alt={props.pokemon.name} />
        </div>
      </article>
    </div>
  );
}

export default CartItemComponent;
