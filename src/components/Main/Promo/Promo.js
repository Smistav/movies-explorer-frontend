import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../logo.svg";
import promo_img from "../../../images/ball_web.svg"
function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__header">
          <Link to="/">
            <img src={logo} alt="Логотип" className="logo" />
          </Link>
          <div className="promo__auth">
            <Link to="signup" className="promo__signup">
              Регистрация
          </Link>
            <Link to="signin" className="promo__signin">
              Войти
          </Link>
          </div>
        </div>
        <div className="promo__main">
          <div>
            <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
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