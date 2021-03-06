import React from 'react';
import { shallow, mount  } from 'enzyme';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import connectedPokedexWrapper, { PokedexWrapper } from './PokedexWrapper';
import configureMockStore from 'redux-mock-store';
const fakeStore = configureMockStore()({pokemon: []})


describe('PokedexWrapper', () => {
  let wrapper;
  let component;
  let props;

  beforeEach(() => {
    props = {
      storePokeTypes: jest.fn(),
    }
    wrapper = shallow(<PokedexWrapper {...props}/>)
    component = wrapper.find(PokedexWrapper)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have a default state of isLoading: true', () => {
    wrapper = shallow(<PokedexWrapper {...props}/>, {disableLifecycleMethods:true})

    expect(wrapper.state('isLoading')).toEqual(true)
  });

  it('should fetch pokemon on componentDidMount', async () => {
    const mockPokemon = [{name: "normal"},{name: "fighting"},{name: "fairy"}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({pokemonList: mockPokemon})}));

    wrapper = mount(<PokedexWrapper />)
    wrapper.instance().getPokes = jest.fn()

    await Promise.all(mockPokemon);

    expect(window.fetch).toHaveBeenCalled();
  });

  it.skip('should turn isLoading to false after its done fetching', () => {
    expect(wrapper.state('isLoading')).toEqual(false)
  });



});
