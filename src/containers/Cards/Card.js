import React, { Component } from 'react';
import * as API from '../../Api/Api';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import './card.css';

class Card extends Component {

  handleClick = async () => {
    const pokemonToId = this.props.data.pokemon
    const response = await API.getPokeIds(pokemonToId)
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
