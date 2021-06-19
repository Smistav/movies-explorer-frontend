import React from 'react';
import './MoviesCard.css';
import Card from '../../Card/Card';

function MoviesCard({ card, savedCards, onCardLike }) {
  const isLiked = savedCards.some((savedCard) => savedCard.movieId === card.id)

  function handleLikeClick() {
    console.log(isLiked, card.id, savedCards)
    onCardLike(card);
  }
  return (
    <Card card={card}>
      <button
        onClick={handleLikeClick}
        className={`main__link movies-card__heart ${isLiked ? "movies-card__heart_active" : ""}`} />
    </Card>
  )
}
export default MoviesCard