import React from 'react';
import './MoviesCard.css';
import Card from '../../Card/Card';

function MoviesCard({ card }) {
  return (
    <Card card={card}>
      <button className={`main__link movies-card__heart ${card.isLiked ? "movies-card__heart_active" : ""}`} />
    </Card>
  )
}
export default MoviesCard