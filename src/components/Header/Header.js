import logo from "../logo.svg";
import { Link, Switch, Route } from "react-router-dom";
function Header() {
  return (
    <div className="header">
          <Switch>
            <Route exact path="/">
            <Link className="header__button" to="/">
              <img alt="Логотип">{logo}</img>
              </Link>
            </Route>
            <Route path="/signup">
              <Link className="header__button" to="signin">
                Войти
              </Link>
            </Route>
            <Route path="/signin">
              <Link className="header__button" to="signup">
                Регистрация
              </Link>
            </Route>
          </Switch>
        </div>
  );
}
export default Header;