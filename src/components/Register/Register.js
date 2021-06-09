import React from "react";
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";
import './Register.css';

function Register() {
  return (
    <main>
      <form name="form_register" className="popup__container" noValidate>
        <Link className="popup__link" to="/">
          <Logo />
        </Link>
        <h4 className="popup__header">Добро пожаловать!</h4>
        <div className="popup__input-container">
          <p className="popup__input-header">Имя</p>
          <input
            id="name-input"
            name="name"
            placeholder="Имя"
            className="popup__input"
            type="text"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span id="name-input-error" className="popup__error popup__error_visible">
            Что-то пошло не так...
          </span>
        </div>
        <div className="popup__input-container">
          <p className="popup__input-header">E-mail</p>
          <input
            id="email-input"
            name="email"
            placeholder="Email"
            className="popup__input"
            type="email"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
          />
          <span id="email-input-error" className="popup__error popup__error_visible">
            Что-то пошло не так...
          </span>
        </div>
        <div className="popup__input-container">
          <p className="popup__input-header">Пароль</p>
          <input
            id="password"
            name="password"
            placeholder="Пароль"
            className="popup__input"
            type="password"
            minLength="2"
            maxLength="100"
            autoComplete="off"
            required
          />
          <span id="password-input-error" className="popup__error popup__error_visible">
            Что-то пошло не так...
          </span>
        </div>
        <button type="submit" name="button" className="popup__button">Зарегистрироваться</button>
        <div className="popup__block-link">
          <p className="popup__paragraph">Уже зарегистрированы?</p>
          <Link to="signin" className="popup__link popup__link_position_bottom">
            Войти
          </Link>
        </div>
      </form>
    </main>
  )
}
export default Register