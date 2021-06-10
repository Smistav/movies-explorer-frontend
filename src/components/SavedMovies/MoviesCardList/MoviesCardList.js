import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import cards_saved from '../../../utils/cards_saved';
import CardList from '../../CardList/CardList';

function MoviesCardList() {
  return (
    <CardList className="movies-cards-list">
      {cards_saved.map((item) => (
        <MoviesCard key={item._id} card={item} />
      ))}
    </CardList>
  )
}
export default MoviesCardList