import React from "react";
import PopupForm from '../PopupForm/PopupForm';
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './Register.css';

function Register() {
  return (
    <>
      <Link className="main__link register__link" to="/">
        <Logo />
      </Link>
      <PopupForm
        name="register"
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        underButtonText="Уже зарегистрированы?"
        underButtonName="Войти"
        path="/signin"
      >
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
      </PopupForm>
    </>
  )
}
export default Register