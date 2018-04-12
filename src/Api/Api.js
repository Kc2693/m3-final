const root = `http://localhost:3001`

export const fetchPokeTypes = async () => {
  try {
    const initFetch = await fetch(`${root}/types`)
    const pokemonList = await initFetch.json();
    const IdentifiedPokemon = await getPokeIds(pokemonList)
    return IdentifiedPokemon;
  } catch (err) {
    throw err;
  }
}

export const getPokeIds = async (pokemonList) => {
  const completedList = await pokemonList.map(async(pokeType) => {
    const pokeIds = pokeType.pokemon.map(async(pokemon) => {
      const initFetch = await fetch(`${root}/pokemon/${pokemon}`)
      const identified = await initFetch.json()

      return identified
    })

    pokeType.pokemon = await Promise.all(pokeIds)

    return pokeType;
  })
  return Promise.all(completedList)
}
