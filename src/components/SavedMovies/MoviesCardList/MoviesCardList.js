import React from 'react';
import '../../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ savedCards, onCardRemove }) {
  return (
    <section className="movies-card-list">
      { savedCards &&
        savedCards.map((item) => (
          <MoviesCard key={item.movieId} card={item} onCardRemove={onCardRemove} />
        ))}
    </section>
  )
}
export default MoviesCardList