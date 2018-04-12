const root = `http://localhost:3001`

export const fetchPokeTypes = async () => {
  const initFetch = await fetch(`${root}/types`)
  const pokemon = initFetch.json();

  return pokemon
}
