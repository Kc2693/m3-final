import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as API from '../../Api/Api';
import loadingGif from './loading.gif';
import { Card } from '../../components/Cards/Card';
import "./pokemon-wrapper.css"

class PokedexWrapper extends Component {

  handleClick = async () => {
    await this.getPokes();
    await this.displayElements();
  }

  getPokes = async() => {
    const pokemon = await API.fetchPokeTypes();
    this.props.storePokemon(pokemon)
  }

  displayElements = () => {
      this.props.pokemon.length > 8 ?
      this.makeCards(this.props.pokemon) :
      this.displayLoadingGif()
  }

  makeCards = (pokemon) => {
    return this.props.pokemon.map((pokemon, index) => {
      return <Card
                data={pokemon}
                key={index}
              />
    })
  }

  displayLoadingGif = () => {
    return (
      <img
        className="loading-img"
        src={loadingGif}
        alt="pikachu running"/>
    )
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="poke-btn">Pokemon!</button>
        {this.makeCards()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { pokemon: state.pokemon }
}

const mapDispatchToProps = dispatch => ({
  storePokemon: (pokemon) => dispatch(actions.storePokemon(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexWrapper);
