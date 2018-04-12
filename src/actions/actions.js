// export const fakeAction = () => ({ type: 'FAKE'})

export const storePokeTypes = (pokeTypes) => ({
  type: "STORE_POKETYPES",
  pokeTypes
})

export const storePokemonInfo = (pokemon) => ({
  type: "STORE_POKEMON",
  pokemon
})
