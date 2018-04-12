import Card from './Card';
import React from 'react';
import { shallow  } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let props;
  beforeEach(() => {
    props = {
      data: {
        id: "2",
        name: "fighting",
        pokemon: ["56", "57","66", "67", "68"]
      }
    }

    wrapper = shallow(<Card {...props}/>)
  });

  it('should start off with default states', () => {
    const defaultState = {
      pokemon: [],
      clicked: false
    }
    expect(wrapper.state()).toEqual(defaultState)
  });

  it('should make a fetch call on handleClick', () => {
    window.fetch
  });
});
