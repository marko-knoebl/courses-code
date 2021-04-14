/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Pokemon } from "../Pokemon";
import Card from "./Card";

type HomeViewProps = {
  pokemons: Array<Pokemon>;
  loadMore: () => void;
};

function HomeView(props: HomeViewProps) {
  return (
    <div>
      <section
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        `}
      >
        {props.pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <button
          css={css`
            font-size: 1.5em;
            border-radius: 4px;
            border: none;
            padding: 0.5em 1em;
          `}
          onClick={() => {
            props.loadMore();
          }}
        >
          load more
        </button>
      </section>
    </div>
  );
}

export default HomeView;
