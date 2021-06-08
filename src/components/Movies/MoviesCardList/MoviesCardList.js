import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../../utils/cards';
function MoviesCardList() {
  return (
    <div className="movie-card-list">
      {cards.map((item) => (
        <MoviesCard key={item._id} card={item} />
      ))}
    </div>
  )
}
export default MoviesCardList