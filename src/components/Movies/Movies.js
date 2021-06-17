import React, { useEffect, useState } from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from '../../components/Movies/Preloader/Preloader';
import More from "./More/More";

function Movies({ filteredCards = "", loading, onSubmit }) {
  const filteredCardListLength = filteredCards.length;
  const [countCards, setCountCards] = useState(3);
  const [more, setMore] = useState(false);

  useEffect(() => {
    if (countCards < filteredCardListLength) {
      setMore(true);
    } else {
      setMore(false);
    }
  }, [countCards, filteredCardListLength])

  function handleClick() {
    setCountCards(countCards + 3);
  }
  return (
    <section className="main movies">
      <div className="main__container movies__container">
        <SearchForm onSubmit={onSubmit} />
        {loading && (<Preloader />)}
        {filteredCards && (<MoviesCardList countCards={countCards} cards={filteredCards} />)}
        {more && (<More onClick={handleClick} />)}
      </div>
    </section>
  )
}
export default Movies