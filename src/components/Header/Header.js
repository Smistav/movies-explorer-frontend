import logo from "../../logo.svg";
import { Link, Switch, Route } from "react-router-dom";
function Header() {
  return (
    <div className="header">
          <Switch>
            <Route exact path="/">
            <Link  to="/">
              <img src={logo} alt="Логотип" className="header__logo"/>
              </Link>
            </Route>
            <Route path="/signup">
              <Link  to="signin">
                Войти
              </Link>
            </Route>
            <Route path="/signin">
              <Link to="signup">
                Регистрация
              </Link>
            </Route>
          </Switch>
        </div>
  )
}
export default Header;