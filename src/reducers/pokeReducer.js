const pokeReducer = (state=[], action) => {
  switch (action.type) {
    case "STORE_POKETYPES":
      return [...action.pokeTypes]
    default:
      return state;
  }
};

export default pokeReducer
