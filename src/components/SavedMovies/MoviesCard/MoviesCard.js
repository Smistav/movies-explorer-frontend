import React from 'react';
import './MoviesCard.css';
import Card from '../../Card/Card';

function MoviesCard({ card, onCardRemove }) {
  function handleRemoveOn(evt) {
    evt.target.closest('figure')
      .querySelector('.movies-card__remove')
      .classList.add('movies-card__remove_active');
  }
  function handleRemoveOut(evt) {
    evt.target.closest('figure')
      .querySelector('.movies-card__remove')
      .classList.remove('movies-card__remove_active');
  }
  function handleClick() {
    onCardRemove(card);
  }
  return (
    <Card card={card} onRemove={handleRemoveOn} offRemove={handleRemoveOut}>
      <button onClick={handleClick} className="main__link movies-card__remove" />
    </Card>
  )
}
export default MoviesCard