import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards_saved from '../../../utils/cards_saved';
import '../MoviesCardList/movies-card-list.css';

function MoviesCardList() {
  return (
    <section className="movie-card-list">
      {cards_saved.map((item) => (
        <MoviesCard key={item._id} card={item} />
      ))}
    </section>
  )
}
export default MoviesCardList