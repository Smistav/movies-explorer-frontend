import React from "react";
import { Link } from "react-router-dom";
import './Promo.css';
import Logo from "../../Logo/Logo";
import promo_img from "../../../images/ball_web.svg"

function Promo() {
  return (
    <section className="main promo">
      <div className="main__container">
        <div className="promo__header">
          <Link to="/">
            <Logo />
          </Link>
          <div className="promo__sign">
            <Link to="signup" className="promo__sign-up">
              Регистрация
          </Link>
            <Link to="signin" className="promo__sign-in">
              Войти
          </Link>
          </div>
        </div>
        <div className="main__body">
          <div>
            <h1 className="main__title promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="main__subtitle promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button className="promo__button">Узнать больше</button>
          </div>
          <img src={promo_img} alt="Картинка WEB земной шар" className="promo__img" />
        </div>
        <div className="promo__footer">
        </div>
      </div>
    </section>
  )
}
export default Promo