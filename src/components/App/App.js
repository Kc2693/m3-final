import React, { Component } from 'react';
import './App.css';
import PokedexWrapper from '../../containers/PokedexWrapper/PokedexWrapper'


class App extends Component {

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="main-title"> POKéDEX </h1>
        </div>
        <PokedexWrapper />
      </div>
    );
  }
}


export default App;
