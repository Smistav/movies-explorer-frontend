import React from 'react';
import '../../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ savedCards }) {
  return (
    <section className="movies-card-list">
      { savedCards &&
        savedCards.map((item) => (
          <MoviesCard key={item.movieId} card={item} />
        ))}
    </section>
  )
}
export default MoviesCardList