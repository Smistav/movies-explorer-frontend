import React from 'react';
import './Card.css';

function Card({ card, onRemove, offRemove, children }) {
  const time = ~~(card.time / 60) + 'ч ' + (card.time % 60) + 'м';
  return (
    <figure onMouseOver={onRemove} onMouseOut={offRemove} className="card main__link">
      <img src={card.link} alt={card.name} className="card__img" />
      <figcaption className="card__description">
        <h3 className="card__title">{card.name}</h3>
        {children}
        <p className="card__time">{time}</p>
      </figcaption>
    </figure>
  )
}
export default Card