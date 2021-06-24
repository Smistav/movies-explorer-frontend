import { Link, Switch, Route, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import './Header.css';

function Header({ logged }) {
  const location = useLocation();
  return (
    <div className={`main header ${location.pathname !== '/' && 'header_path_color'}`}>
      <div className="main__container">
        <div className="header__block">
          <Switch>
            <Route exact path="/">
              {!logged && (
                <>
                  <Link className="main__link" to="/"><Logo /></Link>
                  <div className="header__sign">
                    <Link className="main__link header__sign-up" to="signup">Регистрация</Link>
                    <Link className="main__link header__sign-in" to="signin">Войти</Link>
                  </div>
                </>
              )}
              {logged && (
                <Navigation />
              )}
            </Route>
            <Route path="/movies">
              <Navigation />
            </Route>
            <Route path="/saved-movies">
              <Navigation />
            </Route>
            <Route path="/profile">
              <Navigation />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
export default Header;