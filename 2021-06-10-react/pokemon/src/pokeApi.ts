import { Pokemon } from "./types";

type ApiPokemon = {
  id: number;
  name: string;
  height: number;
  sprites: {
    front_default: string;
  };
};

async function fetchPokemonById(id: number): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = (await res.json()) as ApiPokemon;
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    imgUrl: data.sprites.front_default,
  };
}

export { fetchPokemonById };
