import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>
        <div className="portfolio__main">
          <div className="portfolio__main-block">
            <a href="https://ya.ru" className="portfolio__heading">
              Статичный сайт
            <p className="portfolio__link">↗</p>
            </a>
            <a href="https://ya.ru" className="portfolio__heading">
              Адаптивный сайт
              <p className="portfolio__link">↗</p>
            </a>
            <a href="https://ya.ru" className="portfolio__heading">
              Одностраничное приложение
              <p className="portfolio__link">↗</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio