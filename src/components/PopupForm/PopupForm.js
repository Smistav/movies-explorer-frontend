import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import './PopupForm.css';

function PopupForm({ name, title, buttonName, underButtonText, underButtonName, path, children }) {
  return (
    <div>
      <form name={`form_${name}`} className="popup__container" noValidate>
        <Link className="popup__link" to="/">
          <Logo />
        </Link>
        <h4 className="popup__header">{title}</h4>
        {children}
        <button type="submit" name="button" className={`popup__button popup__button_form_${name}`}>
          {buttonName}</button>
        <div className="popup__block-link">
          <p className="popup__paragraph">{underButtonText}</p>
          <Link to={path} className="popup__link popup__link_position_bottom">
            {underButtonName}
          </Link>
        </div>
      </form>
    </div>
  );
}
export default PopupForm;