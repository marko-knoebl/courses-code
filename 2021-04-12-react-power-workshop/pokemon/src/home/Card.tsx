/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

import { Pokemon } from "../Pokemon";

type CardProps = {
  pokemon: Pokemon;
};

function Card(props: CardProps) {
  return (
    <article
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 160px;
        border-radius: 8px;
        background-color: #f0f0f0;
        margin: 8px;
        padding: 8px;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
      `}
    >
      <h1>{props.pokemon.name}</h1>
      <img src={props.pokemon.frontImg} alt={props.pokemon.name} />
      <section>
        <h1>{props.pokemon.id}</h1>
      </section>
      <NavLink to={`/pokemon/${props.pokemon.id}`}>view</NavLink>
    </article>
  );
}

export default Card;
