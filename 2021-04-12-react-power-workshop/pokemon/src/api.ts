async function fetchPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await res.json();
  const name = data.name;
  const artworkImg = data.sprites.other["official-artwork"].front_default;
  const frontImg = data.sprites.front_default;
  return { name: name, artworkImg: artworkImg, frontImg: frontImg };
}

export { fetchPokemon };
