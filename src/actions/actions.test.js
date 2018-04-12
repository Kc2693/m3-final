import * as actions from './actions'

describe('Actions', () => {
  describe('storePokeTypes', () => {
    it('should create an action with pokemon types', () => {
      const mockPokeTypes = [{name: "normal"},{name: "fighting"},{name: "fairy"}]
      const expectedAction = {
        type: "STORE_POKETYPES",
        pokeTypes: mockPokeTypes
      }

      expect(actions.storePokeTypes(mockPokeTypes)).toEqual(expectedAction)
    });
  });
});
