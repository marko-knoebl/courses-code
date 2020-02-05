import React, { FC, useState, useEffect, useContext } from "react";
import ThemeContext from "../ThemeContext";

type PokemonDetailProps = {
  id: number;
};

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const [pokemonData, setPokemonData] = useState<{ name: string }>({
    name: ""
  });
  const fetchPokemonDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then(res => res.json())
      .then(responseData => setPokemonData(responseData));
  };
  useEffect(fetchPokemonDetails, [props.id]);
  const theme = useContext(ThemeContext).theme;
  return (
    <div style={theme === "fancy" ? { textDecoration: "underline" } : {}}>
      details for pokemon {props.id}: {pokemonData.name}
    </div>
  );
};

export default PokemonDetail;
