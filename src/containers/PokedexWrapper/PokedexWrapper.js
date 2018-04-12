import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class PokedexWrapper extends Component {

  render() {
    return (
      <div>

      </div>
    )
  }
}


const mapStateToProps = () => ({
  pokemon: this.state.pokemon
});

const mapDispatchToProps = dispatch => ({
  storePokemon: (pokemon) => dispatch(actions.storePokemon(pokemon))
});

export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);
