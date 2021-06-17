import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, countCards }) {
  return (
    <section className="movies-card-list">
      {cards.slice(0, countCards).map((item) => (
        <MoviesCard key={item.id} card={item} />
      ))}
    </section>
  )
}
export default MoviesCardList