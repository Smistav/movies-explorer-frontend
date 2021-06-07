import React from "react";

function AboutProject() {
  return (
    <section className="aboutProject">
      <div className="aboutProject__container">
        <h2 className="aboutProject__header">О проекте</h2>
        <div className="aboutProject__main">
          <div className="aboutProject__main-block">
            <h3 className="aboutProject__heading">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="aboutProject__main-block">
            <h3 className="aboutProject__heading">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="aboutProject__footer">
          <div className="aboutProject__footer-row">
            <p className="aboutProject__footer-block">1 неделя</p>
            <p className="aboutProject__footer-block aboutProject__footer-block_block_second">
              4 недели</p>
          </div>
          <div className="aboutProject__footer-row">
            <p className="aboutProject__footer-block aboutProject__footer-block_blind">Back-end</p>
            <p className="aboutProject__footer-block aboutProject__footer-block_block_second 
            aboutProject__footer-block_blind">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutProject