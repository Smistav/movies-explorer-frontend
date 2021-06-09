import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import './Header.css';

function Header() {
  return (
    <div className="main header">
      <div className="main__container">
        <div className="header__block">
          <Switch>
            <Route exact path="/">
              <Link to="/">
                <Logo />
              </Link>
              <Link to="signup">
                Регистрация
              </Link>
              <Link to="signin">
                Войти
              </Link>
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
            <Route path="/signup">
              <Link to="signin">
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
      </div>
    </div>
  )
}
export default Header;