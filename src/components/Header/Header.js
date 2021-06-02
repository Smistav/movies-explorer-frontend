import logo from "../../logo.svg";
import { Link, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
function Header() {
  return (
    <div className="header">
          <Switch>
            <Route exact path="/">
              <Link  to="/">
                <img src={logo} alt="Логотип" className="logo"/>
              </Link>
              <Link to="signup">
                Регистрация
              </Link>
              <Link to="signin">
                Войти
              </Link>
            </Route>
            <Route path="/movies">
              <Navigation/>
            </Route>
            <Route path="/saved-movies">
              <Navigation/>
            </Route>
            <Route path="/profile">
              <Navigation/>
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