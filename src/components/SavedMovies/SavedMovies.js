import React from "react";
import './SavedMovies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "./Devider/Devider";
import Preloader from '../Movies/Preloader/Preloader';
import ErrorQuery from '../Movies/SearchForm/ErrorQuery/ErrorQuery';
import { ERROR_QUERY, EMPTY_QUERY, EMPTY_RESULT } from '../../utils/constants';

function SavedMovies({ savedCards, filteredSavedCards = "", loading, errorQuery,
  emptyResult, emptyQuery, onSubmit, onCardRemove }) {
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm onSubmit={onSubmit} />
        {loading && (<Preloader />)}
        {errorQuery && (<ErrorQuery errorName={ERROR_QUERY} />)}
        {emptyQuery && (<ErrorQuery errorName={EMPTY_QUERY} />)}
        {emptyResult && (<ErrorQuery errorName={EMPTY_RESULT} />)}
        {filteredSavedCards.length ? (<MoviesCardList savedCards={filteredSavedCards}
          onCardRemove={onCardRemove} />)
          : (<MoviesCardList savedCards={savedCards} onCardRemove={onCardRemove} />)}
        <Devider />
      </div>
    </section>
  )
}
export default SavedMovies;