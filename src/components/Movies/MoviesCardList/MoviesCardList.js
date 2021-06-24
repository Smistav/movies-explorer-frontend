import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, countCards, onCardLike, savedCards, owner }) {
  return (
    <section className="movies-card-list">
      {cards.slice(0, countCards).map((item) => (
        <MoviesCard
          key={item.id}
          onCardLike={onCardLike}
          savedCards={savedCards}
          card={item}
          owner={owner} />
      ))}
    </section>
  )
}
export default MoviesCardList