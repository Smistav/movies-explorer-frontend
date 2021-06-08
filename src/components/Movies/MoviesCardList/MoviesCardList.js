import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import cards from '../../../utils/cards';
function MoviesCardList() {
  return (
    <section className="movie-card-list">
      <div className="movie-card-list__container">
        {cards.map((item) => (
          <MoviesCard key={item._id} card={item} />
        ))}
      </div>
      <Preloader />
    </section>
  )
}
export default MoviesCardList