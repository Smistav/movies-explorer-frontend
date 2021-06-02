import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.svg";

function Navigation () {
  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="menu__link_active" className="menu__link"><img src={logo} alt="Логотип" className="logo"/></NavLink>
      <NavLink to="/movies" activeClassName="menu__link_active" className="menu__link">Фильмы</NavLink>
      <NavLink to="/saved-movies" activeClassName="menu__link_active" className="menu__link">Сохраненные фильмы</NavLink>
      <NavLink to="/profile" activeClassName="menu__link_active" className="menu__link">Аккаунт</NavLink>
    </nav>
  )
}

export default Navigation; 