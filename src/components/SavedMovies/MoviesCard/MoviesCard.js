import React from 'react';
import '../MoviesCard/movies-card.css';

function MoviesCard({ card }) {
  const time = ~~(card.time / 60) + 'ч ' + (card.time % 60) + 'м';
  return (
    <figure className="movies-card">
      <img src={card.link} alt={card.name} className="movies-card__img" />
      <figcaption className="movies-card__description">
        <h3 className="movies-card__title">{card.name}</h3>
        <button className={`movies-card__heart ${card.isLiked ? "movies-card__heart_active" : ""
          }`} />
        <p className="movies-card__time">{time}</p>
      </figcaption>
    </figure>
  )
}
export default MoviesCard