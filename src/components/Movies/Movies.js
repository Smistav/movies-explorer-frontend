import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
function Movies() {
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm />
        <MoviesCardList />
      </div>
    </section>
  )
}
export default Movies