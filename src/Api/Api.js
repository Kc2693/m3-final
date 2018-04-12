const root = `http://localhost:3001`

export const fetchPokeTypes = async () => {
  try {
    const initFetch = await fetch(`${root}/types`)
    const pokemonList = await initFetch.json();
    return pokemonList;
  } catch (err) {
    throw err;
  }
}

export const getPokeIds = async (pokemonList) => {
  const identifiedPokemon = await pokemonList.map(async(pokeId) => {
      const response = await fetch(`${root}/pokemon/${pokeId}`);
      const identified = await response.json();

      return identified
    })
    return Promise.all(identifiedPokemon)
}
