import React, { Component } from 'react';
import * as API from '../../Api/Api';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      clicked: false
    }
  }

  handleClick = async () => {
    const pokemonToId = this.props.data.pokemon
    const response = await API.getPokeIds(pokemonToId)

    if(!this.state.clicked) {
      this.setState({
        clicked: true,
        pokemon: response
      })
    } else {
      this.setState({
        clicked: false,
      })
    }

  }

  displayPokemon = (pokemon) => {
    return pokemon.map((pokemon, index) => {
      return (
        <div className="poke-info" key={index}>
          <p>Name: {pokemon.name}</p>
          <p>Type: {this.props.data.name}</p>
          <p>Weight: {pokemon.weight}</p>
          <img src={pokemon.sprites.front_default} alt="poke-sprite" />
        </div>
      )
    })
  }

  render(props) {
    return (
      <div
        className={this.state.clicked ? "active-card" : "poke-card"}
        onClick={this.handleClick}>
        <h5>{this.props.data.name}</h5>
        <div className="poke-info-card">
          {this.state.clicked && this.displayPokemon(this.state.pokemon)}
        </div>
      </div>
    )
  }
}


export default Card;
