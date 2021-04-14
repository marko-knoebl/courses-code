import { useCallback, useEffect, useState } from "react";

import { Pokemon } from "./Pokemon";
import { fetchPokemon } from "./api";

type PokemonQueryLoading = {
  id: number;
  isLoading: true;
  isSuccess: false;
};
type PokemonQuerySuccess = {
  id: number;
  isLoading: false;
  isSuccess: true;
  data: Pokemon;
};
type PokemonQuery = PokemonQueryLoading | PokemonQuerySuccess;

function usePokemons() {
  const [pokemonQueries, setPokemonQueries] = useState<Array<PokemonQuery>>([]);

  const loadedPokemons = pokemonQueries
    .filter((query) => query.isSuccess)
    .map((query) => (query as PokemonQuerySuccess).data);
  loadedPokemons.sort((a, b) => a.id - b.id);

  const loadingPokemonIds = pokemonQueries
    .filter((query) => query.isLoading)
    .map((pokemonQuery) => pokemonQuery.id);

  async function _loadPokemonById(id: number) {
    setPokemonQueries((pokemonQueries) => {
      return [...pokemonQueries, { id: id, isLoading: true, isSuccess: false }];
    });
    const pokemon = await fetchPokemon(id);
    setPokemonQueries((pokemonQueries) => {
      return pokemonQueries.map((query) =>
        query.id === id
          ? {
              ...query,
              isLoading: false,
              isSuccess: true,
              data: { ...pokemon, id: id },
            }
          : query
      );
    });
  }

  const requestPokemon = useCallback((id: number) => {
    if (
      !loadingPokemonIds.some((pid) => pid === id) &&
      !loadedPokemons.some((p) => p.id === id)
    ) {
      _loadPokemonById(id);
    }
  }, [loadedPokemons, loadingPokemonIds]);

  async function loadMore() {
    let numLoaded = 0;
    for (let i = 1; i <= 150; i++) {
      if (!loadedPokemons.some((p) => p.id === i)) {
        // does not exist
        requestPokemon(i);
        numLoaded++;
        if (numLoaded === 10) {
          break;
        }
      }
    }
  }

  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      requestPokemon(i);
    }
  }, [requestPokemon]);

  return {
    loadedPokemons: loadedPokemons,
    loadMore: loadMore,
    requestPokemon: requestPokemon,
  };
}

export { usePokemons };
