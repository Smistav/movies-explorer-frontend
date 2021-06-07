import React from "react";

function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__header">Технологии</h2>
        <div className="techs__main">
          <div className="techs__main-block">
            <h3 className="techs__heading">7 технологий</h3>
            <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
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