import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="main about-project">
      <div className="main__container about-project__container">
        <h2 className="main__header about-project__header">О проекте</h2>
        <div className="main__body about-project__body">
          <div className="main__block about-project__block">
            <h3 className="main__title about-project__title">Дипломный проект включал 5 этапов</h3>
            <p className="main__subtitle about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="main__block about-project__block">
            <h3 className="main__title about-project__title">На выполнение диплома ушло 5 недель</h3>
            <p className="main__subtitle about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__footer">
          <div className="about-project__footer-row">
            <p className="about-project__footer-block">1 неделя</p>
            <p className="about-project__footer-block about-project__footer-block-second">
              4 недели</p>
          </div>
          <div className="about-project__footer-row">
            <p className="about-project__footer-block about-project__footer-block_blind">Back-end</p>
            <p className="about-project__footer-block about-project__footer-block-second 
            about-project__footer-block_blind">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutProject