import Card from './Card';
import React from 'react';
import { shallow  } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let props;
  let mockResponse;
  beforeEach(() => {
    props = {
      data: {
        id: "2",
        name: "fighting",
        pokemon: ["56", "57","66", "67", "68"]
      }
    }

    wrapper = shallow(<Card {...props}/>)

    mockResponse = [
      {id: "16", name: "Pidgey", sprites:{front_default: ''}, type: "1", weight: 18},
      {id: "17", name: "Pidgeot",sprites:{front_default: ''}, type: "1", weight: 18},
      {id: "19", name: "rattata",sprites:{front_default: ''}, type: "1", weight: 18},
      {id: "20", name: "raticate",sprites:{front_default: ''}, type: "1", weight: 18}
    ]
  });

  it('should start off with default states', () => {
    const defaultState = {
      pokemon: [],
      clicked: false
    }
    expect(wrapper.state()).toEqual(defaultState)
  });

  it('should make a fetch call on handleClick', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({response: mockResponse})
    }));

    wrapper.instance().handleClick();

    expect(window.fetch).toHaveBeenCalled();
  });

  it('handleClick should toggle clicked state', async () => {
    wrapper.instance().displayPokemon = jest.fn();

    expect(wrapper.state('clicked')).toEqual(false)

    await wrapper.instance().handleClick()

    expect(wrapper.state('clicked')).toEqual(true)

    await wrapper.instance().handleClick()

    expect(wrapper.state('clicked')).toEqual(false)
  });

  
});
