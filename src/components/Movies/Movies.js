import React, { useEffect, useState } from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from './Preloader/Preloader';
import ErrorQuery from './SearchForm/ErrorQuery/ErrorQuery'
import More from "./More/More";
import {
  ADD_CARDS_1280, ADD_CARDS_768_320, INIT_CARDS_1280, INIT_CARDS_768,
  INIT_CARDS_320, ERROR_QUERY, EMPTY_QUERY
} from '../../utils/constants';

function Movies({ filteredCards = "", loading, errorQuery, emptyQuery, onSubmit }) {
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
  useEffect(() => {
    setCountCard();
  }, []);
  const filteredCardListLength = filteredCards.length;
  const [countCards, setCountCards] = useState(setCountCard('init'));//initCountCards
  const [more, setMore] = useState(false);
  useEffect(() => {
    countCards < filteredCardListLength ? setMore(true) : setMore(false);
  }, [countCards, filteredCardListLength]);

  function handleClick() {
    setCountCards(countCards + setCountCard('add'));//addCountCards
  }
  return (
    <section className="main movies">
      <div className="main__container movies__container">
        <SearchForm onSubmit={onSubmit} />
        {loading && (<Preloader />)}
        {errorQuery && (<ErrorQuery errorName={ERROR_QUERY} />)}
        {emptyQuery && (<ErrorQuery errorName={EMPTY_QUERY} />)}
        {filteredCards.length ? (<MoviesCardList countCards={countCards} cards={filteredCards} />) : ""}
        {more && (<More onClick={handleClick} />)}
      </div>
    </section>
  )
}
export default Movies