import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import * as API from '../../Api/Api';
import loadingGif from './loading.gif';
import Card from '../Cards/Card';
import "./pokemon-wrapper.css"

export class PokedexWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    await this.getPokes();
    this.setState({isLoading: false})
  }

  async getPokes() {
    const pokemonTypeList = await API.fetchPokeTypes();
    this.props.storePokeTypes(pokemonTypeList)
  }

  makeCards = (pokemon) => {
    return this.props.pokeTypes.map((pokemon, index) => {
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
      <div className="poke-wrapper">
        {this.state.isLoading ? this.displayLoadingGif() : this.makeCards()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { pokeTypes: state.pokeTypes }
}

const mapDispatchToProps = dispatch => ({
  storePokeTypes: (pokeTypes) => dispatch(actions.storePokeTypes(pokeTypes))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexWrapper);
