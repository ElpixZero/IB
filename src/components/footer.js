import React from 'react';
import "../style.css";
import LineF from '../img/lineFooter.png';
import EllipseFooter from '../img/ellipseFooter.png';

function Footer (props) {
    return (
        <footer>
            <div className="topFooter">
                <div className = "firstFooter">
                    <div className="textFooter headFooter">Для дома</div>
                    <br />
                    <div className="textFooter">Напиши блин</div>
                    <div className="textFooter">Любой текст</div>
                    <div className="textFooter">Че ты этот копируешь</div>
                    <div className="textFooter">Миша превет</div>
                </div>
                <div className = "secondFooter">
                    <div className="textFooter headFooter">Для малого бизнеса</div>
                    <br />
                    <div className="textFooter">Good day</div>
                    <div className="textFooter">To everybody</div>
                    <div className="textFooter">You're wonderful</div>
                </div>
                <div className = "thirdFooter">
                    <div className="textFooter headFooter">Для среднего бизнеса</div>
                    <br />
                    <div className="textFooter">Как же</div>
                    <div className="textFooter">Интересно</div>
                    <div className="textFooter">Верстать</div>
                </div>
                <div className = "fourthFooter">
                    <div className="textFooter headFooter">Для крупного бизнеса</div>
                    <br />
                    <div className="textFooter">So incredible</div>
                    <div className="textFooter">Activity</div>
                </div>
            </div>
            <img src={LineF} className="lineFooter" alt="LineF"/>
            <div className="bottomFooter">
            <div>Контакты</div>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <div>Партнеры</div>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <div>Об угрозах</div>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <div>Новости</div>
            <img src={EllipseFooter} className="ellipseFooter" alt="ellipseFooter"/>
            <div>Блог</div>
            </div>
        </footer>
    )
}

export default Footer;
