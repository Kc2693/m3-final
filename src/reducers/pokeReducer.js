const pokeReducer = (state=[], action) => {
  switch (action.type) {
    case "STORE_POKEMON":
      return [...action.pokemon]
    default:
      return state;
  }
};

export default pokeReducer
