import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import './PopupForm.css';

function PopupForm({ name, title, buttonName, underButtonText,
  underButtonName, path, children, validForm, loading, onSubmit, onLogout, errorResultApi, okResultApi }) {
  return (
    <div>
      {loading && (<Preloader />)}
      <form
        onSubmit={onSubmit}
        name={`form_${name}`}
        className={`popup__container popup__container_form_${name} ${loading ? 'popup__container_hover' : ''}`}
        noValidate>
        <h4 className={`popup__header popup__header_form_${name}`}>{title}</h4>
        {children}
        <button
          disabled={!validForm || ''}
          type="submit"
          name="button"
          className={`main__link popup__button popup__button_form_${name} 
        ${validForm ? '' : `popup__button_form_${name}_disabled`}`}
        >
          {buttonName}
          {errorResultApi && (
            <span className={`popup__error popup__error_visible popup__error_form_${name}`}>
              {errorResultApi}
            </span>
          )}
          {okResultApi && (
            <span className={`popup__ok popup__ok_visible popup__ok_form_${name}`}>
              {okResultApi}
            </span>
          )}
        </button>

        <div className={`popup__block-link popup__block-link_form_${name}`}>
          <p className={`popup__paragraph popup__paragraph_form_${name}`}>{underButtonText}</p>
          <Link onClick={onLogout} to={path} className={`main__link popup__link-bottom popup__link-bottom_form_${name}`}>
            {underButtonName}
          </Link>
        </div>
      </form>
    </div>
  );
}
export default PopupForm;