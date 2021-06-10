import React from 'react';
import { Link } from "react-router-dom";
import './PopupForm.css';

function PopupForm({ name, title, buttonName, underButtonText,
  underButtonName, path, children }) {
  return (
    <div>
      <form name={`form_${name}`} className="popup__container" noValidate>
        <h4 className="popup__header">{title}</h4>
        {children}
        <button type="submit" name="button" className={`main__link 
        popup__button popup__button_form_${name}`}>
          {buttonName}</button>
        <div className="popup__block-link">
          <p className="popup__paragraph">{underButtonText}</p>
          <Link to={path} className="main__link popup__link-bottom">
            {underButtonName}
          </Link>
        </div>
      </form>
    </div>
  );
}
export default PopupForm;