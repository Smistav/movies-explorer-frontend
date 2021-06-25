import './PopupError.css';

const PopupError = ({ errorName }) => {
    return (
        <div className="popup-error">
            <div className="popup-error__container">
                <p className="popup-error__text">{errorName}</p>
            </div>
        </div>
    )
};

export default PopupError
