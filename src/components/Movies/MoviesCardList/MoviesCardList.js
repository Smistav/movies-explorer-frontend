import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../../utils/cards';
function MoviesCardList() {
  return (
    <section className="movie-card-list">
      {cards.map((item) => (
        <MoviesCard key={item._id} card={item} />
      ))}
    </section>
  )
}
export default MoviesCardList