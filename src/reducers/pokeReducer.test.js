import pokeReducer from './pokeReducer';


describe('pokeReducer', () => {

  it('should have a default state of an empty array', () => {
    expect(pokeReducer(undefined, {})).toEqual([])
  });

  it('should set state to an array of pokemon when action.type matches', () => {
    const mockPokemon = [
      {name: "normal"},
      {name: "fighting"},
      {name: "fairy"}
    ];
    const mockAction = {
      type: "STORE_POKEMON",
      pokemon: mockPokemon
    }

    expect(pokeReducer(undefined, mockAction)).toEqual(mockPokemon)
  });
  
});
