const fakeReducer = (state=[], action) => {
  console.log("hello");
  switch (action.type) {
    case "STORE_POKEMON":
      return [...action.pokemon]
    default:
      return state;
  }
};

export default fakeReducer
