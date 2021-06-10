import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import account_icon from "../../images/account-icon.svg";
import Logo from '../Logo/Logo';

function Navigation() {
  return (
    <nav className="menu">
      <NavLink exact to="/" activeClassName="menu__link_active" className="main__link menu__link">
        <Logo />
      </NavLink>
      <div className='menu__block-link'>
        <NavLink to="/movies" activeClassName="menu__link_active" className="main__link menu__link">
          Фильмы
        </NavLink>
        <NavLink to="/saved-movies" activeClassName="menu__link_active" className="main__link menu__link">
          Сохраненные фильмы
        </NavLink>
      </div>
      <NavLink to="/profile" activeClassName="menu__link_active" className="main__link menu__link menu__link-image">
        Аккаунт
        <img src={account_icon} alt="иконка" className="main__link menu__account-icon" />
      </NavLink>
    </nav>
  )
}

export default Navigation; 