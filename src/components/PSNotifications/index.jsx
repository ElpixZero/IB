import React from 'react';
import PersonalSpaceNtfMessageIcon from '../../img/PersonalSpaceNtfMessageIcon.svg';
import './index.css';

function PSNotifications() {
  return (
    <div className="psContainer">
        <div className="psNtfBlock">
            <div className="psTitle">
                8 декабря <span className="psTitleNtfCount">2 новых уведомлений</span>
            </div>

            <div className="psMessagesBlock">
                <div className="psNotifications">
                    <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                    <p className="psNotificationsMessage">МИША, ОПОВЕЩЕНИЯ ЖДУТ АПИ, ИМ СКУЧНО БЕЗ НЕГО</p>
                </div>
            </div>

            <div className="psMessagesBlock">
                <div className="psNotifications">
                    <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                    <p className="psNotificationsMessage">МИША, ОПОВЕЩЕНИЯ ЖДУТ АПИ, ИМ СКУЧНО БЕЗ НЕГО</p>
                </div>
            </div>
        </div>

        <div className="psNtfBlock">
            <div className="psTitle">
                8 декабря <span className="psTitleNtfCount">2 новых уведомлений</span>
            </div>

            <div className="psMessagesBlock">
                <div className="psNotifications">
                    <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                    <p className="psNotificationsMessage">МИША, ОПОВЕЩЕНИЯ ЖДУТ АПИ, ИМ СКУЧНО БЕЗ НЕГО</p>
                </div>
            </div>

            <div className="psMessagesBlock">
                <div className="psNotifications">
                    <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                    <p className="psNotificationsMessage">МИША, ОПОВЕЩЕНИЯ ЖДУТ АПИ, ИМ СКУЧНО БЕЗ НЕГО</p>
                </div>
            </div>
        </div>

        <div className="psNtfBlock">
            <div className="psTitle">
                8 декабря <span className="psTitleNtfCount">2 новых уведомлений</span>
            </div>

            <div className="psMessagesBlock">
                <div className="psNotifications">
                    <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                    <p className="psNotificationsMessage">МИША, ОПОВЕЩЕНИЯ ЖДУТ АПИ, ИМ СКУЧНО БЕЗ НЕГО</p>
                </div>
            </div>

            <div className="psMessagesBlock">
                <div className="psNotifications">
                    <img src={PersonalSpaceNtfMessageIcon} className="psNotificationsIcon"/>
                    <p className="psNotificationsMessage">МИША, ОПОВЕЩЕНИЯ ЖДУТ АПИ, ИМ СКУЧНО БЕЗ НЕГО</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PSNotifications;
