import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from '../../components/Movies/Preloader/Preloader';
function Movies() {
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm />
        <MoviesCardList />
        <Preloader />
      </div>
    </section>
  )
}
export default Movies