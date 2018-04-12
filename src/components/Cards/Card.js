import React from 'react';
import './card.css';

export const Card = (props) => {
  return (
    <div className="poke-card">
      <h5>{props.data.name}</h5>
    </div>
  )
}
