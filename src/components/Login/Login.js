import PopupForm from '../PopupForm/PopupForm';
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import './Login.css';

function Login({ onLogin, errorResultApi, loading }) {
  const {
    values,
    errors,
    validForm,
    handleChange,
    handleSubmit,
  } = useCustomForm({ onSubmit: (values) => onLogin(values) });
  return (
    <>
      <Link className="main__link login__link" to="/">
        <Logo />
      </Link>
      <PopupForm
        name="login"
        title="Рады видеть!"
        buttonName="Войти"
        underButtonText="Ещё не зарегистрированы?"
        underButtonName="Регистрация"
        path="/signup"
        onSubmit={handleSubmit}
        validForm={validForm}
        loading={loading}
        errorResultApi={errorResultApi}
      >
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
            minLength="2"
            maxLength="40"
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
            minLength="2"
            maxLength="100"
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
export default Login