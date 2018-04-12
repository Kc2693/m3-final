import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as API from '../../Api/Api';
import loadingGif from './loading.gif';
import { Card } from '../../components/Cards/Card';

class PokedexWrapper extends Component {

  getPokes = async() => {
    const pokemon = await API.fetchPokeTypes();
    this.props.storePokemon(pokemon)
  }

  displayElements = () => {
    this.props.pokemon.length > 10 ?
      this.makeCards() :
      this.displayLoadingGif()
  }

  makeCards = () => {
    return this.props.pokemon.map((pokemon) => {
      <Card data={pokemon} />
    })
  }

  displayLoadingGif = () => {
    return (
      <img src={loadingGif} alt="pikachu running"/>
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getPokes}>Pokemon!</button>
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
