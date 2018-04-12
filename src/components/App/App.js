import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/';
import * as API from '../../Api/Api';

class App extends Component {

  getPokes = async() => {
    const pokemon = await API.fetchPokeTypes();

    console.log(pokemon)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <button onClick={this.getPokes}>Pokemon!</button>
        <FakeContainer />
      </div>
    );
  }
}


export default App;
