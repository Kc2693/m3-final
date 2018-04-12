import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import * as API from '../../Api/Api';
import loadingGif from './loading.gif';
import { Card } from '../../components/Cards/Card';
import "./pokemon-wrapper.css"

export class PokedexWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount = async () => {
    await this.getPokes();
    this.setState({isLoading: false})
  }

  async getPokes() {
    const pokemon = await API.fetchPokeTypes();
    this.props.storePokemon(pokemon)
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
        {this.state.isLoading ? this.displayLoadingGif() : this.makeCards()}
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
