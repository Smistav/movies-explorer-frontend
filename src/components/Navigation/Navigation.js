import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import './NavigationTablet.css';
import './NavigationPhone.css';
import account_icon from "../../images/account-icon.svg";
import menu_icon_close from '../../images/icon_menu_close.svg';
import Logo from '../Logo/Logo';
import { MAIN_PAGE, MOVIES_PAGE, PROFILE_PAGE, SAVED_MOVIES_PAGE } from '../../utils/constants';

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMenuT, setActiveMenuT] = useState(false);
  function handleClick() {
    const pageWidth = document.documentElement.scrollWidth;
    pageWidth === 320 ?
      activeMenu ? setActiveMenu(false) : setActiveMenu(true) :
      activeMenuT ? setActiveMenuT(false) : setActiveMenuT(true);
  }
  return (
    <>
      <nav className="menu">
        <NavLink exact to={MAIN_PAGE} activeClassName="menu__link_active" className="main__link menu__link">
          <Logo />
        </NavLink>
        <div className='menu__block-link'>
          <NavLink to={MOVIES_PAGE} activeClassName="menu__link_active" className="main__link menu__link">
            Фильмы
        </NavLink>
          <NavLink to={SAVED_MOVIES_PAGE} activeClassName="menu__link_active"
            className="main__link menu__link">
            Сохраненные фильмы
        </NavLink>
        </div>
        <NavLink to={PROFILE_PAGE} activeClassName="menu__link_active" className="main__link 
        menu__link menu__link-image">
          Аккаунт
        <img src={account_icon} alt="иконка" className="main__link menu__account-icon" />
        </NavLink>
        <div className="main__link menu__icon-tablet menu__icon-phone">
          <button onClick={handleClick} className="main__link menu__button" />
        </div>
      </nav>
      <nav onClick={handleClick} className={`menu-tablet ${activeMenuT ? "menu-tablet_visible" : ""}`}>
        <NavLink exact to={MAIN_PAGE} activeClassName="menu-tablet__link_active" className="main__link 
        menu-tablet__link">
          Главная
        </NavLink>
        <div className='menu-tablet__block-link'>
          <NavLink to={MOVIES_PAGE} activeClassName="menu-tablet__link_active" className="main__link 
          menu-tablet__link">
            Фильмы
      </NavLink>
          <NavLink to={SAVED_MOVIES_PAGE} activeClassName="menu-tablet__link_active"
            className="main__link menu-tablet__link">
            Сохраненные фильмы
      </NavLink>
        </div>
        <NavLink to={PROFILE_PAGE} activeClassName="menu-tablet__link_active" className="main__link 
        menu-tablet__link menu-tablet__link-image">
          Аккаунт
      <img src={account_icon} alt="" className="main__link menu-tablet__account-icon" />
        </NavLink>
        <div className="main__link menu-tablet__icon-close">
          <img onClick={handleClick} src={menu_icon_close} alt="" className="main__link" />
        </div>
      </nav>
      <nav onClick={handleClick} className={`menu-phone ${activeMenu ? "menu-phone_visible" : ""}`}>
        <NavLink exact to={MAIN_PAGE} activeClassName="menu-phone__link_active" className="main__link 
        menu-phone__link">
          Главная
        </NavLink>
        <div className='menu-phone__block-link'>
          <NavLink to={MOVIES_PAGE} activeClassName="menu-phone__link_active" className="main__link 
          menu-phone__link">
            Фильмы
      </NavLink>
          <NavLink to={SAVED_MOVIES_PAGE} activeClassName="menu-phone__link_active"
            className="main__link menu-phone__link">
            Сохраненные фильмы
      </NavLink>
        </div>
        <NavLink to={PROFILE_PAGE} activeClassName="menu-phone__link_active" className="main__link 
        menu-phone__link menu-phone__link-image">
          Аккаунт
      <img src={account_icon} alt="" className="main__link menu-phone__account-icon" />
        </NavLink>
        <div className="main__link menu-phone__icon-close">
          <img onClick={handleClick} src={menu_icon_close} alt="" className="main__link" />
        </div>
      </nav>
    </>
  )
}

export default Navigation; 