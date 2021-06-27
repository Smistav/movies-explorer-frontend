import { Link, Switch, Route, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import './Header.css';
import {
  MAIN_PAGE, LOGIN_PAGE, REGISTER_PAGE, MOVIES_PAGE,
  SAVED_MOVIES_PAGE, PROFILE_PAGE
} from '../../utils/constants';
function Header({ logged }) {
  const location = useLocation();
  return (
    <div className={`main header ${location.pathname !== MAIN_PAGE && 'header_path_color'}`}>
      <div className="main__container">
        <div className="header__block">
          <Switch>
            <Route exact path={MAIN_PAGE}>
              {!logged && (
                <>
                  <Link className="main__link" to={MAIN_PAGE}><Logo /></Link>
                  <div className="header__sign">
                    <Link className="main__link header__sign-up" to={REGISTER_PAGE}>Регистрация</Link>
                    <Link className="main__link header__sign-in" to={LOGIN_PAGE}>Войти</Link>
                  </div>
                </>
              )}
              {logged && (
                <Navigation />
              )}
            </Route>
            <Route path={MOVIES_PAGE}>
              <Navigation />
            </Route>
            <Route path={SAVED_MOVIES_PAGE}>
              <Navigation />
            </Route>
            <Route path={PROFILE_PAGE}>
              <Navigation />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
export default Header;