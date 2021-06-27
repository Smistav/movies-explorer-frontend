import { useState } from "react";
import './SearchForm.css';

function SearchForm({ onSubmit, onCheckbox, checkbox }) {
  const [query, setQuery] = useState('');
  function handleCheckbox() {
    onCheckbox();
  }
  function handleChange(e) {
    const { target } = e;
    const { name, value } = target;
    setQuery({ [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(query);
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form__container" noValidate>
        <input
          id="name-film"
          name="name"
          value={query.value}
          onChange={handleChange}
          className="form__input"
          type="text"
          placeholder="Фильм"
          required />
        <button type="submit" name="button" className="main__link form__button">Найти</button>
      </form>
      <input
        onClick={handleCheckbox}
        type="checkbox"
        className="form__slider"
        name="slider"
        id="slider"
        defaultChecked={checkbox}
      />
      <label className="main__link" htmlFor="slider">Короткометражки</label>
    </div>
  )
}
export default SearchForm