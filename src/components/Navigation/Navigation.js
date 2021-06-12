import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import './NavigationTablet.css';
import account_icon from "../../images/account-icon.svg";
import menu_icon_tablet from '../../images/icon_menu_tablet.svg';
import menu_icon_close from '../../images/icon_menu_tablet_close.svg'
import Logo from '../Logo/Logo';

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);
  function handleClick() {
    activeMenu ? setActiveMenu(false) : setActiveMenu(true);
  }
  return (
    <>
      <nav className="menu">
        <NavLink exact to="/" activeClassName="menu__link_active" className="main__link menu__link">
          <Logo />
        </NavLink>
        <div className='menu__block-link'>
          <NavLink to="/movies" activeClassName="menu__link_active" className="main__link menu__link">
            Фильмы
        </NavLink>
          <NavLink to="/saved-movies" activeClassName="menu__link_active"
            className="main__link menu__link">
            Сохраненные фильмы
        </NavLink>
        </div>
        <NavLink to="/profile" activeClassName="menu__link_active" className="main__link 
        menu__link menu__link-image">
          Аккаунт
        <img src={account_icon} alt="иконка" className="main__link menu__account-icon" />
        </NavLink>
        <div className="main__link menu__icon-tablet">
          <img onClick={handleClick} src={menu_icon_tablet} alt="" className="main__link" />
        </div>
      </nav>
      <nav onClick={handleClick} className={`menu-tablet ${activeMenu ? "menu-tablet_visible" : ""}`}>
        <NavLink exact to="/" activeClassName="menu-tablet__link_active" className="main__link 
        menu-tablet__link">
          Главная
        </NavLink>
        <div className='menu-tablet__block-link'>
          <NavLink to="/movies" activeClassName="menu-tablet__link_active" className="main__link 
          menu-tablet__link">
            Фильмы
      </NavLink>
          <NavLink to="/saved-movies" activeClassName="menu-tablet__link_active"
            className="main__link menu-tablet__link">
            Сохраненные фильмы
      </NavLink>
        </div>
        <NavLink to="/profile" activeClassName="menu-tablet__link_active" className="main__link 
        menu-tablet__link menu-tablet__link-image">
          Аккаунт
      <img src={account_icon} alt="" className="main__link menu-tablet__account-icon" />
        </NavLink>
        <div className="main__link menu-tablet__icon-close">
          <img onClick={handleClick} src={menu_icon_close} alt="" className="main__link" />
        </div>
      </nav>
    </>
  )
}

export default Navigation; 