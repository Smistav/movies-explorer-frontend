import React from "react";
import './AboutMe.css';
import aboutme_img from "../../../images/photo_me.jpeg"

function AboutMe() {
  return (
    <section className="main about-me">
      <div className="main__container">
        <h2 className="main__header">Студент</h2>
        <div className="main__body about-me__body">
          <div className="about-me__block">
            <h3 className="main__title about-me__title">Станислав</h3>
            <p className="main__subtitle about-me__subtitle">Фронтенд-разработчик, 43 года</p>
            <p className="about-me__paragraph">Я родился и живу в Москве, закончил химико-технологический
            факультет МГТУ и МВА-логистика ГУУ. У меня есть жена и 2 детей. Я люблю слушать музыку,
            а ещё увлекаюсь туризмом. Кодить начал со школы. С 2015 года работал в сфере Логистики.
            После того, как прошёл курс по веб-разработке, начал искать работу по профилю учебы</p>
            <div className="about-me__block-link">
              <a href="https://www.facebook.com/smistav" className="main__link main__subtitle about-me__link">
                Facebook
            </a>
              <a href="https://github.com/Smistav" className="main__link main__subtitle about-me__link">
                Github
            </a>
            </div>
          </div>
          <img src={aboutme_img} alt="Фото студента" className="about-me__img" />
        </div>
      </div>
    </section>
  )
}
export default AboutMe