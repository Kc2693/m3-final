import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render(props) {
    return (
      <div className="poke-card">
        <h5>{this.props.data.name}</h5>
      </div>
    )
  }
}


export default Card;
