import React, { useEffect, useState } from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from './Preloader/Preloader';
import ErrorQuery from './SearchForm/ErrorQuery/ErrorQuery'
import More from "./More/More";

function Movies({ filteredCards = "", loading, errorQuery, emptyQuery, onSubmit }) {
  const filteredCardListLength = filteredCards.length;
  const [countCards, setCountCards] = useState(3);
  const [more, setMore] = useState(false);

  useEffect(() => {
    countCards < filteredCardListLength ? setMore(true) : setMore(false);
  }, [countCards, filteredCardListLength])

  function handleClick() {
    setCountCards(countCards + 3);
  }
  return (
    <section className="main movies">
      <div className="main__container movies__container">
        <SearchForm onSubmit={onSubmit} />
        {loading && (<Preloader />)}
        {errorQuery && (<ErrorQuery errorName="Во время запроса произошла ошибка. 
        Возможно, проблема с соединением или сервер недоступен. Подождите немного 
        и попробуйте ещё раз" />)}
        {emptyQuery && (<ErrorQuery errorName="Ничего не найдено" />)}
        {filteredCards.length ? (<MoviesCardList countCards={countCards} cards={filteredCards} />) : ""}
        {more && (<More onClick={handleClick} />)}
      </div>
    </section>
  )
}
export default Movies