import React from 'react';
import axios from 'axios';
import PasswordIcon from '../../img/passwordIcon.svg';
import close from '../../img/close.svg';

import './index.css';

function RegisterPage({closeModalWindow, setCurrentForm}) {
  const [email, setEmail] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isAcceptPolice, setAcceptPolicy] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState({title: '', msg: ''});

  const onRegister = async e => {
    e.preventDefault();

    if (!isAcceptPolice) {
      setErrorMessage({
        title: 'policy',
        msg: 'Вы не приняли условия Пользовательского Соглашения',
      });
      return;
    }

    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      setErrorMessage({
        title: 'email',
        msg: 'Введите корректную почту!',
      });
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage({
        title: 'password',
        msg: 'Пароли не совпадают!',
      });
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const ans = await axios({
        method: 'post',
        url: 'https://hard-rock.site:1443/api/user/new',
        data: JSON.stringify(data),
      });

      if (ans.status === 201) {
        setErrorMessage({
          title: 1,
          msg: 'Успешно! Cейчас вы будете перенаправлены на страницу авторизации...',
        });
        return setTimeout(() => setCurrentForm('login'), 2000);
      }
    } catch({response}) {
      if (response.status === 405 || response.status === 400 || response.status === 500) {
        return setErrorMessage({
          title: '',
          msg: 'Данный e-mail уже был зарегистрирован!',
        });
      }

        return setErrorMessage({
          title: '',
          msg: 'К сожалению, что-то пошло не так. Обратитесь, пожалуйста, в поддержку!',
        });
    }
  };

  return (
    <form className="formReg" onSubmit={e => onRegister(e)}>
      <img src={close} alt="X"className='closeButton' onClick={() => closeModalWindow(false)} />
      <h1 className="formTitle">Регистрация</h1>
      <div className="formFields">
        <input
          id="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          className={`formField formFieldPassword${errorMessage.title === 'email' ? ' errorActive': ' '}`}
          placeholder="Адрес электронной почты"
        />
        <input
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          className={`formField formFieldPassword${errorMessage.title === 'password' ? ' errorActive': ' '}`}
          type="password"
          placeholder="Пароль"
        />
        <input
          id="repeatPassword"
          onChange={e => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          className={`formField formFieldPassword${errorMessage.title === 'password' ? ' errorActive': ' '}`}
          type="password"
          placeholder="Повторите пароль"
        />
        <div className="regFormCheckbox">
          <div class="checkbox">
            <input id="regCheck" value={isAcceptPolice} onChange={() => setAcceptPolicy(!isAcceptPolice)} name="regCheck" type="checkbox" />
            <label className="ff" for='regCheck'></label>
        </div>
        <div className="checkboxLabel" >
          <label for='regCheck' className="checkboxLabelText">Я подтверждаю, что полностью прочитал, понимаю и принимаю все условия <a href="/policy" className="checkboxLabelSpecial">Политики конфиденциальности</a>, описывающей обработку данных</label>
        </div>
       </div>
       <p className={`regErrorMessage${errorMessage.title === 1 ? ' succeedMsg' : ''}`}>{errorMessage.msg ? errorMessage.msg : ' '}</p>
        
        <input
          type="submit"
          className="formButton"
          value="Создать учетную запись"
        />
      </div>
    </form>
  );
}

export default RegisterPage;
