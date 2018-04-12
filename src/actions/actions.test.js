import * as actions from './actions'

describe('Actions', () => {
  describe('storePokemon', () => {
    it('should create an action with pokemon', () => {
      const mockPokemon = [{name: "normal"},{name: "fighting"},{name: "fairy"}]
      const expectedAction = {
        type: "STORE_POKEMON",
        pokemon: mockPokemon
      }

      expect(actions.storePokemon(mockPokemon)).toEqual(expectedAction)
    });
  });
});
