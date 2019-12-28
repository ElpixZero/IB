import React from 'react';
import axios from 'axios';
import PersonalSpaceNtfMessageIcon from '../../img/PersonalSpaceNtfMessageIcon.svg';
import './index.css';

function PSNotifications() {
    let getDateOfNotification = (params) => {
        let ans;
        if (params) {
            ans = new Date(2019, 11, params).toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
                });
        } else {
            ans = new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
        }
      
      return ans.slice(0, ans.length - 8);
    };

    let getRandomDay = (min) => {
        let max = new Date().getMonth();
        console.log(max);
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    let getRandomIng = (min, max) => {
        console.log(max);
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    
    const typicalNotifications = [
        {
            date: getDateOfNotification(),
            count: 2,
            notifications: ['Поступила новая лицензия к продукту NS Studio','31 декабря сайт может работать с перебоями']
        },
        {
            date: getDateOfNotification(getRandomDay(1)),
            count: 3,
            notifications: ['Новогодние скидки на новые продукты!', '21.01.2020 истекает лицензия у продукта KasperStudio', 'Новый продукт у Касперского. Смотреть бесплатно и без регистрации']
        }
    ];

  return (
    <div className="psContainer">
            {typicalNotifications.map( (obj) => (
                <div className="psNtfBlock">
                    <div className="psTitle">
                        {obj.date} <span className="psTitleNtfCount">{obj.count} новых уведомления</span>
                    </div>

                    {obj.notifications.map( ntf => (
                        <div className="psMessagesBlock">
                            <div className="psNotifications">
                                <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                                <p className="psNotificationsMessage">{ntf}</p>
                            </div>
                        </div> 
                    ))}
                </div>
            ))}
    </div>
  );
}

export default PSNotifications;
