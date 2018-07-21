import React from 'react';
import './CatCards.css';

const CatCards = props => (
    <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
          <strong>Name:</strong> {props.name}
      </ul>
      <ul>
        <strong>Class:</strong>
        {props.class}
      </ul>
    </div>
  </div>
);


export default CatCards