import React from "react";
import aboutme_img from "../../../images/photo_me.jpeg"
function AboutMe() {
  return (
    <section className="aboutme">
      <div className="aboutme__container">
        <h2 className="aboutme__header">Студент</h2>
        <div className="aboutme__main">
          <div className="aboutme__main-block">
            <h3 className="aboutme__heading">Виталий</h3>
            <p className="aboutme__article">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div className="aboutme__block-link">
              <p className="aboutme__link">Facebook</p>
              <p className="aboutme__link">Github</p>
            </div>
          </div>
          <img src={aboutme_img} alt="Фото студента" className="aboutme__img" />
        </div>
      </div>
    </section>
  )
}
export default AboutMe