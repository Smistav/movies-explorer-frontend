import React from "react";
import './AboutMe.css';
import aboutme_img from "../../../images/photo_me.jpeg"

function AboutMe() {
  return (
    <section className="main about-me">
      <div className="main__container about-me__container">
        <h2 className="main__header about-me__header">Студент</h2>
        <div className="main__body about-me__body">
          <div className="about-me__block">
            <h3 className="main__title about-me__title">Станислав</h3>
            <p className="main__subtitle about-me__subtitle">Фронтенд-разработчик, 43&nbsp;года</p>
            <p className="about-me__paragraph">Я&nbsp;родился и&nbsp;живу в&nbsp;Москве, закончил химико-технологический
            факультет МГТУ и&nbsp;МВА-логистика ГУУ. У&nbsp;меня есть жена и&nbsp;2&nbsp;детей. Я&nbsp;люблю слушать музыку,
            а&nbsp;ещё увлекаюсь туризмом. Кодить начал со&nbsp;школы. С&nbsp;2015 года работал в&nbsp;сфере Логистики.
После того, как прошёл курс по&nbsp;веб-разработке, начал искать работу по&nbsp;профилю учебы</p>
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