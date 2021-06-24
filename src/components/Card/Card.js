import './Card.css';

function Card({ card, onRemove, offRemove, children }) {
  const hour = ~~(card.duration / 60);
  const minute = (card.duration % 60);
  const time = `${hour === 0 ? "" : hour + 'ч '}${minute === 0 ? "" : minute + 'м'}`;
  return (
    <figure onMouseOver={onRemove} onMouseOut={offRemove} className="card main__link">
      <img src={card.image} alt={card.nameRU} className="card__img" />
      <figcaption className="card__description">
        <h3 className="card__title">{card.nameRU}</h3>
        {children}
        <p className="card__time">{time}</p>
      </figcaption>
    </figure>
  )
}
export default Card