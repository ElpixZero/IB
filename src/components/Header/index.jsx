import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../../img/logo.png';
import './index.css';

function Header() {
  return (
      <header className="header"> 
        <div className="leftHeader">
          <img src={Logo} className="logo" alt="Logo" />
          <a>IB</a>
        </div>
        <div className="centerHeader">
          <a>Решения</a>
          <a>Поддержка</a>
          <a>Партнеры</a>
        </div>
        <div className="rightHeader">
          <a href="/auth">Личный кабинет</a>
          <div className="hamburgerMenu">
          <HamburgerMenu />
          </div>
        </div>
      </header>
  );
}

export default Header;
