import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class Example extends React.Component {
  render() {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '25px',
        height: '25px',
        right: '30px',
        top: '27.5px',
      },
      bmBurgerBars: {
        background: 'white',
      },
      bmBurgerBarsHover: {
        background: '#a90000',
      },
      bmCrossButton: {
        height: '30px',
        width: '30px',
        right: '15px',
        top: '12px',
      },
      bmCross: {
        background: '#fff',
        height: '20px',
        width: '4px',
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: 0,
      },
      bmMenu: {
        background:
          'linear-gradient( 237.26deg, rgba(87, 29, 163, 0.8) 0%, rgba(65, 29, 213, 0.82) 100% )',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
        display: 'flex',
        flexDirection: 'column',
      },
      bmItem: {
        display: 'inline-block',
        marginBottom: '20px',
        fontWeight: 700,
        color: '#fff',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
      },
    };
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={styles} width="100%" right>
        <a href="/decions">Решения</a>
        <a href="/support">Поддержка</a>
        <a href="/partners">Партнеры</a>
        <a href="/auth">Личный кабинет</a>
      </Menu>
    );
  }
}

export default Example;
