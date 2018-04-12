import React from 'react';
import connectedPokedexWrapper, { PokedexWrapper } from './PokedexWrapper';
import { shallow, mount  } from 'enzyme';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
import configureMockStore from 'redux-mock-store';
const fakeStore = configureMockStore()({pokemon: []})


describe('PokedexWrapper', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    wrapper = mount(
        <PokedexWrapper />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('rendered the component', () => {
     expect(wrapper.find(PokedexWrapper).length).toEqual(1)
  });

  it.only('should have a default state of isLoading: true', () => {
    wrapper = mount(<PokedexWrapper />, {disableLifecycleMethods:true})

    expect(wrapper.state.isLoading).toEqual(true)
  });

  it.skip('should fetch pokemon on componentDidMount', () => {
    const spy = jest.spyOn(wrapper.instance(), 'getPokes')

    expect(spy).toHaveBeenCalled();
  });

  it.skip('should turn isLoading to false after its done fetching', () => {

    expect(wrapper.state.isLoading).toEqual(false)
  });



});
