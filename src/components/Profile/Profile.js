import { useContext } from "react";
import PopupForm from "../PopupForm/PopupForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useCustomForm from "../../hooks/useCustomForm";
import { MAX_LENGTH_NAME, MIN_LENGTH_NAME, PATTERN_NAME } from "../../utils/constants";
import './Profile.css';

function Profile({ onLogout, onEditUser, errorResultApi, okResultApi, loading }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    errors,
    validForm,
    handleChange,
    handleSubmit,
  } = useCustomForm({
    onSubmit: (values) => onEditUser({
      name: values.name || currentUser.name,
      email: values.email || currentUser.email
    })
  });

  function handleLogout() {
    onLogout();
  }
  return (
    <PopupForm
      name="profile"
      title={`Привет, ${currentUser.name}`}
      buttonName="Редактировать"
      underButtonText=""
      underButtonName="Выйти из аккаунта"
      path="/"
      onLogout={handleLogout}
      onSubmit={handleSubmit}
      validForm={validForm}
      loading={loading}
      errorResultApi={errorResultApi}
      okResultApi={okResultApi}
    >
      <div className={`popup__input-container popup__input-container_form_profile`}>
        <p className={`popup__input-header popup__input-header_form_profile`}>Имя</p>
        <input
          id="name-input"
          name="name"
          value={values.name || currentUser.name}
          onChange={handleChange}
          pattern={PATTERN_NAME}
          placeholder="Имя"
          className={`popup__input popup__input_form_profile`}
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
      <div className="profile__input"></div>
      <div className={`popup__input-container popup__input-container_form_profile`}>
        <p className={`popup__input-header popup__input-header_form_profile`}>E-mail</p>
        <input
          id="email-input"
          name="email"
          value={values.email || currentUser.email}
          onChange={handleChange}
          placeholder="E-mail"
          className={`popup__input popup__input_no-boder popup__input_form_profile`}
          type="email"
          minLength={MIN_LENGTH_NAME}
          maxLength={MAX_LENGTH_NAME}
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
    </PopupForm>
  )
}
export default Profile