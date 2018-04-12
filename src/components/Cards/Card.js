import React, { Component } from 'react';
import * as API from '../../Api/Api';
import './card.css';

class Card extends Component {

  handleClick = async () => {
    const pokemonToId = this.props.data.pokemon
    const response = await API.getPokeIds(pokemonToId)

    console.log(response);
  }

  displayPokemon = () => {
    
  }

  render(props) {
    return (
      <div
        className="poke-card"
        onClick={this.handleClick}>
        <h5>{this.props.data.name}</h5>
      </div>
    )
  }
}


export default Card;
