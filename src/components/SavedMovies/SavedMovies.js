import { useContext } from "react";
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
  function checkOwnerCardList() {
    return savedCards.some(item => item.owner === currentUser._id)
  }
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm onSubmit={onSubmit} />
        {loading && (<Preloader />)}
        {errorQuery && (<ErrorQuery errorName={ERROR_QUERY} />)}
        {emptyQuery && (<ErrorQuery errorName={EMPTY_QUERY} />)}
        {emptyResult && (<ErrorQuery errorName={EMPTY_RESULT} />)}
        {checkOwnerCardList() ? filteredSavedCards.length ?
          (<MoviesCardList owner={currentUser._id} savedCards={filteredSavedCards} onCardRemove={onCardRemove} />)
          : (<MoviesCardList owner={currentUser._id} savedCards={savedCards} onCardRemove={onCardRemove} />)
          : ''
        }
        <Devider />
      </div>
    </section>
  )
}
export default SavedMovies;