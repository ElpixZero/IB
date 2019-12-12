import React from 'react';
import './index.css';
import CloseBotton from './closeButton'
import message from '../../img/message.svg';

function CheckMail() {
    return(
        <div className='modal'>
            <CloseBotton/>
            <div className='header'> 
                <img src={message} alt='message' className='message'/>
                <h1 className='headerModal' >Пароль сброшен</h1>
            </div>
            <div className='textModal'>
                <p>Письмо с подтверждением отправлено вам на почту.</p>
                <p><b>Не получили письмо? </b>Проверьте спам или запросите <span style={{ color: "#E13386"}}><b>повторное отправление</b></span>.</p>
            </div>
            <button className='continueButton'>Продолжить</button>
        </div>
    )
}

export default CheckMail;