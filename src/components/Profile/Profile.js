import React from "react";
import PopupForm from "../PopupForm/PopupForm";
import './Profile.css';

function Profile() {
  const user = {
    name: "Станислав",
    email: "sol@url.ru"
  };
  return (
    <PopupForm
      name="profile"
      title={`Привет, ${user.name}`}
      buttonName="Редактировать"
      underButtonText=""
      underButtonName="Выйти из аккаунта"
      path="/"
    >
      <div className={`popup__input-container popup__input-container_form_profile`}>
        <p className={`popup__input-header popup__input-header_form_profile`}>Имя</p>
        <input
          id="name-input"
          name="name"
          placeholder="Имя"
          className={`popup__input popup__input_form_profile`}
          type="text"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          defaultValue={user.name}
          required
        />
        <span id="name-input-error" className="popup__error">
          {/* popup__error_visible */}
          Что-то пошло не так...
          </span>
      </div>
      <div className="profile__input"></div>
      <div className={`popup__input-container popup__input-container_form_profile`}>
        <p className={`popup__input-header popup__input-header_form_profile`}>E-mail</p>
        <input
          id="email-input"
          name="email"
          placeholder="E-mail"
          className={`popup__input popup__input_form_profile`}
          type="email"
          minLength="2"
          maxLength="40"
          autoComplete="off"
          defaultValue={user.email}
          required
        />
        <span id="email-input-error" className="popup__error">
          {/* popup__error_visible */}
          Что-то пошло не так...
          </span>
      </div>
    </PopupForm>
  )
}
export default Profile