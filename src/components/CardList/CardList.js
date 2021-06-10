import React from 'react';
import './CardList.css';

function CardList({ children }) {
  return (
    <section className="card-list">
      {children}
    </section>
  )
}
export default CardList