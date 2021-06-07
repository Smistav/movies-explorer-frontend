import React from "react";
import aboutme_img from "../../../images/photo_me.jpeg"
function AboutMe() {
  return (
    <section className="main about-me">
      <div className="main__container">
        <h2 className="main__header">Студент</h2>
        <div className="main__body about-me__body">
          <div className="about-me__block">
            <h3 className="main__title about-me__title">Виталий</h3>
            <p className="main__subtitle about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__paragraph">Я родился и живу в Саратове, закончил факультет
            экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
            того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл
            с постоянной работы.</p>
            <div className="about-me__block-link">
              <p className="about-me__link">Facebook</p>
              <p className="about-me__link">Github</p>
            </div>
          </div>
          <img src={aboutme_img} alt="Фото студента" className="about-me__img" />
        </div>
      </div>
    </section>
  )
}
export default AboutMe