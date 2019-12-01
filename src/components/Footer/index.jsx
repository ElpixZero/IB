import React from 'react';
import "./index.css";
import LineF from '../../img/lineFooter.png';
import EllipseFooter from '../../img/ellipseFooter.png';

function Footer (props) {
    return (
        <footer>
            <div className="topFooter">
                <ul>
                    <li className="textFooter headFooter"><a>Для малого бизнеса</a></li>
                    <br />
                    <li className="textFooter"><a>Good day</a></li>
                    <li className="textFooter"><a>To everybody</a></li>
                    <li className="textFooter"><a>Eldar besish</a></li>
                </ul>
                <ul>
                    <li className="textFooter headFooter"><a>Для среднего бизнеса</a></li>
                    <br />
                    <li className="textFooter"><a>Как же</a></li>
                    <li className="textFooter"><a>Интересно</a></li>
                    <li className="textFooter"><a>Верстать</a></li>
                </ul>
            </div>
            <img src={LineF} className="lineFooter" alt="LineF"/>
            <div className="bottomFooter">
            <a>Контакты</a>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <a>Партнеры</a>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <a>Об угрозах</a>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <a>Новости</a>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <a>Блог</a>
            </div>
        </footer>
    )
}

export default Footer;
