import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import Logo from '../../img/logo.png';
import './index.css';
import { Link } from 'react-router-dom';

function Header({setOpenLoginWindow}) {
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
        <a onClick={() => setOpenLoginWindow(true)}>Личный кабинет</a>
        <div className="hamburgerMenu">
          <HamburgerMenu setOpenLoginWindow={setOpenLoginWindow} />
        </div>
      </div>
    </header>
  );
}

export default Header;
