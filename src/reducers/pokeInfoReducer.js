const pokeInfoReducer = (state=[], action) => {
  switch (action.type) {
    case "STORE_POKEMON_INFO":
      return [...action.pokemon]
    default:
      return state;
  }
};

export default pokeInfoReducer
