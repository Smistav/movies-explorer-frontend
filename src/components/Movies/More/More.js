import React from 'react';
import './More.css';

function More({ onClick }) {
  return (
    <div className="more">
      <button onClick={onClick} className="main__link more__button">Еще</button>
    </div>
  )
}
export default More