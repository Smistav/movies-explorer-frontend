import React, { useEffect } from "react";
import './SavedMovies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Devider from "./Devider/Devider";

function SavedMovies({ savedCards }) {
  return (
    <section className="main movies">
      <div className="main__container">
        <SearchForm />
        <MoviesCardList savedCards={savedCards} />
        <Devider />
      </div>
    </section>
  )
}
export default SavedMovies