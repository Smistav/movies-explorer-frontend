import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <main>
      <form name="form_login" className="popup__container popup__container_form_login" noValidate>
        <Link className="popup__link" to="/">
          <Logo />
        </Link>
        <h4 className="popup__header">Рады видеть!</h4>
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
        </div>
        <button type="submit" name="button" className="popup__button">Войти</button>
        <div className="popup__block-link">
          <p className="popup__paragraph">Ещё не зарегистрированы?</p>
          <Link to="signup" className="popup__link popup__link_position_bottom">
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  )
}
export default Login