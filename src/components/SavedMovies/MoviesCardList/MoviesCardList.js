import '../../Movies/MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ savedCards, onCardRemove, owner }) {
  return (
    <section className="movies-card-list">
      { savedCards &&
        savedCards.map((item) => item.owner === owner ? (
          <MoviesCard key={item.movieId} card={item} onCardRemove={onCardRemove} />
        ) : '')}
    </section>
  )
}
export default MoviesCardList