import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext";

const Main = () => {
  const [pokemonList, setPokemonList] = useState<
    Array<{ name: string; url: string }>
  >([]);
  const fetchPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(res => res.json())
      .then(responseData => setPokemonList(responseData.results));
  };
  useEffect(fetchPokemonList, []);
  const theme = useContext(ThemeContext).theme;
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <div key={index} style={theme === "fancy" ? { color: "pink" } : {}}>
          {pokemon.name}: <NavLink to={`/detail/${index + 1}`}>details</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Main;
