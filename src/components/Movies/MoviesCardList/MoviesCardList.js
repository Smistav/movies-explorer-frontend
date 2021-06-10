import React from 'react';
import './MoviesCardList.css';
import cards from '../../../utils/cards';
import MoviesCard from '../MoviesCard/MoviesCard';
import CardList from '../../CardList/CardList';

function MoviesCardList() {
  return (
    <CardList className="movies-cards-list">
      {cards.map((item) => (
        <MoviesCard key={item._id} card={item} />
      ))}
    </CardList>
  )
}
export default MoviesCardList