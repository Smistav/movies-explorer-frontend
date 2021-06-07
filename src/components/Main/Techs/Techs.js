import React from "react";

function Techs() {
  return (
    <section className="main techs">
      <div className="main__container">
        <h2 className="main__header techs__header">Технологии</h2>
        <div className="main__body techs__body">
          <div className="main__block techs__block">
            <h3 className="main__title techs__title">7 технологий</h3>
            <p className="main__subtitle techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
        </div>
        <div className="techs__footer">
          <div className="techs__footer-row">
            <p className="techs__footer-block">HTML</p>
            <p className="techs__footer-block">CSS</p>
            <p className="techs__footer-block">JS</p>
            <p className="techs__footer-block">React</p>
            <p className="techs__footer-block">Git</p>
            <p className="techs__footer-block">Express.js</p>
            <p className="techs__footer-block">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Techs