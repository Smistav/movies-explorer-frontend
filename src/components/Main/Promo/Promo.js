import './Promo.css';
import promo_img from "../../../images/ball_web.svg"

function Promo() {
  function handleClickMore() {
    const element = document.querySelector('.about-project')
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollBy({ top: elementPosition, behavior: 'smooth' });
  }
  return (
    <section className="main promo">
      <div className="main__container">
        <div className="main__body promo__body">
          <div className="main__description">
            <h1 className="main__title promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <p className="main__subtitle promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <button onClick={handleClickMore} className="main__link promo__button">Узнать больше</button>
          </div>
          <img src={promo_img} alt="Картинка WEB земной шар" className="promo__img" />
        </div>
        <div className="promo__footer">
        </div>
      </div>
    </section>
  )
}
export default Promo