import React from "react";
function SearchForm() {
  return (
    <div className="form">
      <form className="form__container" noValidate>
        <input id="name-film" name="name" className="form__input" type="text"
          placeholder="Фильм" required />
        <button type="submit" name="button" className="form__button">Найти</button>
      </form>
      <input type="checkbox" className="form__slider" name="slider" id="slider" />
      <label htmlFor="slider">Короткометражки</label>
    </div>
  )
}
export default SearchForm