import React from 'react';
import '../MoviesCard/MoviesCard.css';

function handleRemove(evt) {
  evt.target.closest('figure')
    .querySelector('.movies-card__remove')
    .classList.add('movies-card__remove_active');
}
function handleRemoveOut(evt) {
  evt.target.closest('figure')
    .querySelector('.movies-card__remove')
    .classList.remove('movies-card__remove_active');
}

function MoviesCard({ card }) {
  const time = ~~(card.time / 60) + 'ч ' + (card.time % 60) + 'м';
  return (
    <figure onMouseOver={handleRemove} onMouseOut={handleRemoveOut} className="movies-card">
      <img src={card.link} alt={card.name} className="movies-card__img" />
      <figcaption className="movies-card__description">
        <h3 className="movies-card__title">{card.name}</h3>
        <button className="movies-card__remove" />
        <p className="movies-card__time">{time}</p>
      </figcaption>
    </figure>
  )
}
export default MoviesCard