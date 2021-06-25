import './MoviesCard.css';
import Card from '../../Card/Card';

function MoviesCard({ card, savedCards, onCardLike, owner }) {
  const isLiked = savedCards.some((savedCard) => (savedCard.movieId ===
    card.id && savedCard.owner === owner))

  function handleLikeClick() {
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