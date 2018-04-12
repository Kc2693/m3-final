import React, { Component } from 'react';
// import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as API from '../../Api/Api';

class PokedexWrapper extends Component {

  getPokes = async() => {
    const pokemon = await API.fetchPokeTypes();
    this.props.storePokemon(pokemon)
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
