import React from 'react';
import { mount  } from 'enzyme';
import { Provider } from 'react-redux';
import PokedexWrapper from './PokedexWrapper';
import configureMockStore from 'redux-mock-store';
const fakeStore = configureMockStore()({pokemon: []})

const wrapper = mount(
<Provider store={fakeStore}>
  <PokedexWrapper />
</Provider>
)
