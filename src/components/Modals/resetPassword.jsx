import React from 'react';
import './index.css';
import CloseBotton from './closeButton'
import mail from '../../img/mail.svg';

function ResetPassword() {
    return(
        <div className='modal'>
            <form className="form">
                <CloseBotton/>
                <div className='header'>
                    <img src={mail} alt='mail' className='mail'/>
                    <h1 className='headerForm' >Сбросить пароль</h1>
                </div>
                <p className='textForm'>Введите адрес электронной почты, использованный при создании учетной записи.</p>
                <input
                    id="email"
                    className="formField"
                    placeholder="Адрес электронной почты"
                />
                <button className='continueButton'>Продолжить</button>
            </form>
        </div> 
    )
}

        
export default ResetPassword;