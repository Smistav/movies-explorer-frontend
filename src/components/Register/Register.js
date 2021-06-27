import PopupForm from '../PopupForm/PopupForm';
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import './Register.css';
import {
  MAIN_PAGE, MIN_LENGTH_PASSWORD, LOGIN_PAGE, MAX_LENGTH_EMAIL, MAX_LENGTH_NAME, MAX_LENGTH_PASSWORD,
  MIN_LENGTH_EMAIL, MIN_LENGTH_NAME, PATTERN_NAME
} from "../../utils/constants";

function Register({ onRegister, errorResultApi, loading }) {
  const {
    values,
    errors,
    validForm,
    handleChange,
    handleSubmit,
  } = useCustomForm({ onSubmit: (values) => onRegister(values) });
  return (
    <>
      <Link className="main__link register__link" to={MAIN_PAGE}>
        <Logo />
      </Link>
      <PopupForm
        name="register"
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        underButtonText="Уже зарегистрированы?"
        underButtonName="Войти"
        path={LOGIN_PAGE}
        onSubmit={handleSubmit}
        validForm={validForm}
        loading={loading}
        errorResultApi={errorResultApi}
      >
        <div className="popup__input-container">
          <p className="popup__input-header">Имя</p>
          <input
            id="name-input"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            placeholder="Имя"
            pattern={PATTERN_NAME}
            className="popup__input"
            type="text"
            minLength={MIN_LENGTH_NAME}
            maxLength={MAX_LENGTH_NAME}
            autoComplete="off"
            required
          />
          {errors.name && (
            <span
              id="name-input-error"
              className={`popup__error ${errors.name ? "popup__error_visible" : ""
                }`}
            >
              {errors.name}
            </span>
          )}
        </div>
        <div className="popup__input-container">
          <p className="popup__input-header">E-mail</p>
          <input
            id="email-input"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            placeholder="Email"
            className="popup__input"
            type="email"
            minLength={MIN_LENGTH_EMAIL}
            maxLength={MAX_LENGTH_EMAIL}
            autoComplete="off"
            required
          />
          {errors.email && (
            <span
              id="email-input-error"
              className={`popup__error ${errors.email ? "popup__error_visible" : ""
                }`}
            >
              {errors.email}
            </span>
          )}
        </div>
        <div className="popup__input-container">
          <p className="popup__input-header">Пароль</p>
          <input
            id="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            placeholder="Пароль"
            className="popup__input"
            type="password"
            minLength={MIN_LENGTH_PASSWORD}
            maxLength={MAX_LENGTH_PASSWORD}
            autoComplete="off"
            required
          />
          {errors.password && (
            <span
              id="password-input-error"
              className={`popup__error ${errors.password ? "popup__error_visible" : ""
                }`}
            >
              {errors.password}
            </span>
          )}
        </div>
      </PopupForm>
    </>
  )
}
export default Register