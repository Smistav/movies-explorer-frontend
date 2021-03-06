import { Link } from "react-router-dom";
import { MAIN_PAGE } from "../../utils/constants";
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className="main page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__subtitle">Страница не найдена</p>
      <Link className="main__link page-not-found__link" to={MAIN_PAGE}>Назад</Link>
    </div>
  )
}
export default PageNotFound;