import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import './Navigation_768.css';
import account_icon from "../../images/account-icon.svg";
import menu_icon from '../../images/icon_menu_768.svg';
import menu_icon_close from '../../images/icon_menu_768_close.svg'
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
          <NavLink to="/saved-movies" activeClassName="menu__link_active" className="main__link menu__link">
            Сохраненные фильмы
        </NavLink>
        </div>
        <NavLink to="/profile" activeClassName="menu__link_active" className="main__link menu__link menu__link-image">
          Аккаунт
        <img src={account_icon} alt="иконка" className="main__link menu__account-icon" />
        </NavLink>
        <div className="main__link menu__icon">
          <img onClick={handleClick} src={menu_icon} alt="иконка" className="main__link" />
        </div>
      </nav>
      <nav onClick={handleClick} className={`menu_res_768 ${activeMenu ? "menu_res_768_visible" : ""}`}>
        <NavLink exact to="/" activeClassName="menu__link_active_res_768" className="main__link menu__link_res_768">
          Главная
        </NavLink>
        <div className='menu__block-link_res_768'>
          <NavLink to="/movies" activeClassName="menu__link_active_res_768" className="main__link menu__link_res_768">
            Фильмы
      </NavLink>
          <NavLink to="/saved-movies" activeClassName="menu__link_active_res_768" className="main__link menu__link_res_768">
            Сохраненные фильмы
      </NavLink>
        </div>
        <NavLink to="/profile" activeClassName="menu__link_active_res_768" className="main__link menu__link_res_768 menu__link-image_res_768">
          Аккаунт
      <img src={account_icon} alt="иконка" className="main__link menu__account-icon_res_768" />
        </NavLink>
        <div className="main__link menu__icon_close">
          <img onClick={handleClick} src={menu_icon_close} alt="иконка" className="main__link" />
        </div>
      </nav>
    </>
  )
}

export default Navigation; 