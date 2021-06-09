import React from "react";
import './Footer.css';

function Footer() {
  const year = new Date();
  return (
    <footer className="main footer">
      <div className="main__container">
        <h4 className="main__header footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
        <div className="main__body footer__body">
          <p className="main__subtitle"> © {year.toLocaleString("ru-Ru", { year: "numeric" })}</p>
          <div className="footer__block-link">
            <a href="https://praktikum.yandex.ru/" className="main__subtitle footer__link">
              Яндекс.Практикум
            </a>
            <a href="https://github.com/Smistav" className="main__subtitle footer__link">
              Github
            </a>
            <a href="https://www.facebook.com/smistav" className="main__subtitle footer__link">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
}
export default Footer;