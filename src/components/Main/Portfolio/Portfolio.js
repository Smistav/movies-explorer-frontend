import React from "react";

function Portfolio() {
  return (
    <section className="main portfolio">
      <div className="main__container">
        <h2 className="main__header portfolio__header">Портфолио</h2>
        <div className="main__body portfolio__body">
          <div className="portfolio__block">
            <a href="https://ya.ru" className="main__title portfolio__title">
              Статичный сайт
            <p className="portfolio__link">↗</p>
            </a>
            <a href="https://ya.ru" className="main__title portfolio__title">
              Адаптивный сайт
              <p className="portfolio__link">↗</p>
            </a>
            <a href="https://ya.ru" className="main__title portfolio__title">
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