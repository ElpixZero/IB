import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../../img/logo.png';
import './index.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="leftHeader">
        <img src={Logo} className="logo" alt="Logo" />
        <a href="#">IB</a>
      </div>
      <div className="centerHeader">
        <a href="/decions">Решения</a>
        <a href="/support">Поддержка</a>
        <a href="/partners">Партнеры</a>
      </div>
      <div className="rightHeader">
        <Link to="/auth">Личный кабинет</Link>
        <div className="hamburgerMenu">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
