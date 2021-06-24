import { useEffect, useState } from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import ErrorQuery from './SearchForm/ErrorQuery/ErrorQuery'
import More from "./More/More";
import {
  ADD_CARDS_1280, ADD_CARDS_768_320, INIT_CARDS_1280, INIT_CARDS_768,
  INIT_CARDS_320, ERROR_QUERY, EMPTY_QUERY, EMPTY_RESULT
} from '../../utils/constants';

function Movies({ filteredCards = "", loading, errorQuery, emptyResult, emptyQuery,
  onSubmit, onCardLike, savedCards, owner }) {
  function setCountCard(str) {
    let initCountCards = 0;
    let addCountCards = 0;
    const pageWidth = document.documentElement.scrollWidth;

    if (pageWidth < 1280) {
      initCountCards = INIT_CARDS_768;
      addCountCards = ADD_CARDS_768_320;
    } else {
      initCountCards = INIT_CARDS_1280;
      addCountCards = ADD_CARDS_1280;
    };
    if (pageWidth < 768) {
      initCountCards = INIT_CARDS_320;
      addCountCards = ADD_CARDS_768_320;
    }
    if (str === 'init') {
      return initCountCards
    } else {
      return addCountCards
    }
  }
  // При монтировании сразу отфильтруем список коротких фильмов
  useEffect(() => {
    setShortMovies(filteredCards.filter(card => card.duration <= 40));
  }, [filteredCards]);
  useEffect(() => {
    window.addEventListener("resize", setCountCard);
  }, []);
  const [countCards, setCountCards] = useState(setCountCard('init'));
  const [checkbox, setCheckbox] = useState(true);
  const [shortMovies, setShortMovies] = useState([]); // Состояние короткометражных фильмов
  const [more, setMore] = useState(false);
  const filteredCardListLength = checkbox ? shortMovies.length : filteredCards.length;
  useEffect(() => {
    countCards < filteredCardListLength ? setMore(true) : setMore(false);
  }, [countCards, filteredCardListLength]);

  function handleClick() {
    setCountCards(countCards + setCountCard('add'));
  }
  function handleCheckbox() {
    setCheckbox(!checkbox);
  }
  return (
    <section className="main movies">
      <div className="main__container movies__container">
        <SearchForm onSubmit={onSubmit} onCheckbox={handleCheckbox} checkbox={checkbox} />
        {loading && (<Preloader />)}
        {errorQuery && (<ErrorQuery errorName={ERROR_QUERY} />)}
        {emptyQuery && (<ErrorQuery errorName={EMPTY_QUERY} />)}
        {emptyResult && (<ErrorQuery errorName={EMPTY_RESULT} />)}
        {filteredCards.length ? (<MoviesCardList
          countCards={countCards}
          onCardLike={onCardLike}
          savedCards={savedCards}
          cards={checkbox ? shortMovies : filteredCards}
          owner={owner}
        />) : ""}
        {more && (<More onClick={handleClick} />)}
      </div>
    </section>
  )
}
export default Movies