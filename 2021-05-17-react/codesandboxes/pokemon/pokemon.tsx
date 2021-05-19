import { useState, useEffect } from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

type Pokemon = {
  name: string;
  height: number;
};

async function fetchPokemon(id: number): Promise<Pokemon> {
  const url = `${baseUrl}${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return { name: data.name, height: data.height };
}

async function fetchPokemonByName(name: string): Promise<Pokemon> {
  const url = `${baseUrl}${name}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed to fetch Pokemon");
  }
  const data = await res.json();
  return { name: data.name, height: data.height };
}

export default function App() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [status, setStatus] = useState("loading");
  const [errormessage, setErrormessage] = useState("");

  async function loadCurrentPokemon() {
    setStatus("loading");
    setPokemon(null);
    try {
      const newPokemon = await fetchPokemonByName(name);
      setPokemon(newPokemon);
      setStatus("success");
    } catch (e) {
      setErrormessage(e.message);
      setStatus("error");
    }
  }

  useEffect(() => {
    loadCurrentPokemon();
  }, [name]);

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {status === "success" && pokemon !== null ? (
        <div>
          <h1>{pokemon.name}</h1>
          <p>height: {pokemon.height}</p>
        </div>
      ) : (
        <div>
          {status}: {errormessage}
        </div>
      )}
    </div>
  );
}
