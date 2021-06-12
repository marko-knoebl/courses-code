import { useEffect, useState } from "react";
import "./App.css";
import { fetchPokemonById } from "./pokeApi";
import { Pokemon } from "./types";

import { useQuery } from "react-query";

/*
mögliche Aufgaben:
+ anzeigen von Daten zu einem Pokemon basierend auf der ID

- Übersichtsansicht
- Routing via React Router
- Caching von API-Daten
  - React-Query
  oder
  - Context
- Styling
*/

function App() {
  const [id, setId] = useState(1);
  const {
    isLoading,
    error,
    data: pokemon,
  } = useQuery(`pokemon/${id}`, () => fetchPokemonById(id));

  // const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();
  // const [loading, setLoading] = useState(false);

  // async function loadPokemon() {
  //   const pokemon = await fetchPokemonById(id);
  //   setCurrentPokemon(pokemon);
  // }

  // useEffect(() => {
  //   loadPokemon();
  // }, [id]);

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <div>{pokemon?.name}</div>
      <img src={pokemon?.imgUrl} alt={pokemon?.name} />
      <div>
        <button onClick={() => setId(id - 1)}>prev</button>
        {id}
        <button onClick={() => setId(id + 1)}>next</button>
      </div>
    </div>
  );
}

export default App;
