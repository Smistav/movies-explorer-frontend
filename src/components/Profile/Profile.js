import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';

function Profile() {
  const user = {
    name: "Станислав",
    email: "sol@url.ru"
  };
  return (
    <section className="main profile">
      <div className="main__container">
        <h2 className="profile__title">Привет, {user.name}</h2>
        <div className="profile__body">
          <p className="profile__row">
            <span>Имя</span>
            <span>{user.name}</span>
          </p>
          <p className="profile__row">
            <span>E-mail</span>
            <span>{user.email}</span>
          </p>
        </div>
        <div className="profile__body profile__footer">
          <p className="main__link profile__link">Редактировать</p>
          <Link className="main__link profile__link profile__link_signout" to="/">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Profile