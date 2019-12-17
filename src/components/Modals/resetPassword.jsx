import React from 'react';
import './index.css';
import CloseBotton from './closeButton';
import close from '../../img/close.svg';
import mail from '../../img/mail.svg';

function ResetPassword({closeModalWindow}) {
    return(
        <div className='resetPassword'>
            <form>
                <img src={close} alt="X"className='closeButton' onClick={() => closeModalWindow(false)} />
                <div className='ResetPasswordheader'>
                    <img src={mail} alt='mail' className='mail'/>
                    <h1 className='resetPasswordheaderForm' >Сбросить пароль</h1>
                </div>
                <p className='resetFormtextForm'>Введите адрес электронной почты, использованный при создании учетной записи.</p>
                <input
                    id="email"
                    className="resetPasswordformField"
                    placeholder="Адрес электронной почты"
                />
                <button className='continueButton'>Продолжить</button>
            </form>
        </div> 
    )
}

        
export default ResetPassword;