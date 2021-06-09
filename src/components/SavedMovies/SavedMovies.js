import React from "react";
import './SavedMovies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "../SavedMovies/Devider/Devider";

function SavedMovies() {
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm />
        <MoviesCardList />
        {/* <Preloader /> */}
        <Devider />
      </div>
    </section>
  )
}
export default SavedMovies