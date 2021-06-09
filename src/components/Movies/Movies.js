import React from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from '../../components/Movies/Preloader/Preloader';
import More from "./More/More";

function Movies() {
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
        <More />
      </div>
    </section>
  )
}
export default Movies