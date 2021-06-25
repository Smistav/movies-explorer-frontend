import { useContext, useState, useEffect } from "react";
import './SavedMovies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "./Devider/Devider";
import Preloader from '../Preloader/Preloader';
import ErrorQuery from '../Movies/SearchForm/ErrorQuery/ErrorQuery';
import { ERROR_QUERY, EMPTY_QUERY, EMPTY_RESULT, SHORT_MOVIES_DURATION } from '../../utils/constants';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies({ savedCards, filteredSavedCards = "", loading, errorQuery,
  emptyResult, emptyQuery, onSubmit, onCardRemove, onCheckbox, checkbox }) {
  const currentUser = useContext(CurrentUserContext);
  const [shortSavedMovies, setShortSavedMovies] = useState([]); // Состояние короткометражных сохраненных фильмов

  function checkOwnerCardList() {
    return savedCards.some(item => item.owner === currentUser._id)
  }
  useEffect(() => {
    const cards = filteredSavedCards.length !== 0 ? filteredSavedCards : savedCards;
    setShortSavedMovies(cards.filter(card => card.duration <= SHORT_MOVIES_DURATION));
  }, [savedCards, filteredSavedCards]);

  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm onSubmit={onSubmit} onCheckbox={onCheckbox} checkbox={checkbox} />
        {loading && (<Preloader />)}
        {errorQuery && (<ErrorQuery errorName={ERROR_QUERY} />)}
        {emptyQuery && (<ErrorQuery errorName={EMPTY_QUERY} />)}
        {emptyResult && (<ErrorQuery errorName={EMPTY_RESULT} />)}
        {checkOwnerCardList() ? filteredSavedCards.length ?
          (<MoviesCardList
            owner={currentUser._id}
            savedCards={checkbox ? shortSavedMovies : filteredSavedCards} onCardRemove={onCardRemove} />)
          : (<MoviesCardList
            owner={currentUser._id}
            savedCards={checkbox ? shortSavedMovies : savedCards} onCardRemove={onCardRemove} />)
          : ''
        }
        <Devider />
      </div>
    </section>
  )
}
export default SavedMovies;