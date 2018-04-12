import React, { Component } from 'react';
import './App.css';
import PokedexWrapper from '../../containers/PokedexWrapper/PokedexWrapper'


class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokedexWrapper />
      </div>
    );
  }
}


export default App;
