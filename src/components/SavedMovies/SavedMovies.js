import { useContext, useState, useEffect } from "react";
import './SavedMovies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "./Devider/Devider";
import Preloader from '../Preloader/Preloader';
import ErrorQuery from '../Movies/SearchForm/ErrorQuery/ErrorQuery';
import { ERROR_QUERY, EMPTY_QUERY, EMPTY_RESULT } from '../../utils/constants';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies({ savedCards, filteredSavedCards = "", loading, errorQuery,
  emptyResult, emptyQuery, onSubmit, onCardRemove }) {
  const currentUser = useContext(CurrentUserContext);
  const [shortSavedMovies, setShortSavedMovies] = useState([]); // Состояние короткометражных сохраненных фильмов
  const [checkbox, setCheckbox] = useState(true);
  function checkOwnerCardList() {
    return savedCards.some(item => item.owner === currentUser._id)
  }
  useEffect(() => {
    const cards = filteredSavedCards !== "" ? filteredSavedCards : savedCards;
    setShortSavedMovies(cards.filter(card => card.duration <= 40));
  }, [savedCards, filteredSavedCards]);
  function handleCheckbox() {
    setCheckbox(!checkbox);
  }
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm onSubmit={onSubmit} onCheckbox={handleCheckbox} checkbox={checkbox} />
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