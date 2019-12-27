import React from 'react';
import axios from 'axios';

import RegisterForm from '../Register';
import close from '../../img/close.svg';

import './index.css';

function LoginPage({setForgetPassword, closeModalWindow}) {
  const [currentForm, setCurrentForm] = React.useState('login');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(' ');

  const onRegister = async e => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const ans = await axios({
        method: 'post',
        url: 'https://hard-rock.site:1443/api/user/login',
        data: JSON.stringify(data),
      });

      console.log(ans);

      if (ans.status === 200) {
        window.location.href = '/im';
      }
    } catch ({response}) {
        if (!response) {
          return setErrorMessage('СИДИШЬ ЧЕРЕЗ РЭУ ?! Тут так не принято');
        } 

        if (response.status === 403) {
          return setErrorMessage('Неправильный логин и пароль');
        } 

        if (response.status === 405) {
          return setErrorMessage('На Вашу почту было выслано письмо. Подтвердите его, пожалуйста.');
        } 

        return setErrorMessage('Что-то пошло не так, попробуйте, пожалуйста, позже');
      }
    
  };

  function changePassword(value) {
    setPassword(value);
    setErrorMessage('');
  }

  function changeEmail(value) {
    setEmail(value);
    setErrorMessage('');
  }

  const loginComponent = (
    <form className="formLog" onSubmit={e => onRegister(e)}>
      <img src={close} alt="X"className='closeButton' onClick={() => closeModalWindow(false)} />
      <h1 className="formTitle">Вход</h1>
      <div className="formFields">
        <input
          id="email"
          onChange={e => changeEmail(e.target.value)}
          value={email}
          className="formField"
          placeholder="Адрес электронной почты"
        />
        <input
          id="password"
          onChange={e => changePassword(e.target.value)}
          value={password}
          className="formField formFieldPassword"
          type="password"
          placeholder="Пароль"
        />
        <p onClick={() => setForgetPassword(true)} className="formForgetPassword">
          Забыли пароль?
        </p>
        <p className="loginErrorMessage">{errorMessage ? errorMessage : ''}</p>
        <input type="submit" className="loginButton" value="Войти" />
      </div>
      <div className="goToRegister">
        <p className="isRegisteredMessage">Не зарегистрированы?</p>
        <button
          onClick={() => setCurrentForm('register')}
          className="goToRegisterButton"
        >
          Создать учетную запись
        </button>
      </div>
    </form>
  );

  const renderedComponent = currentForm === 'register' ? <RegisterForm setCurrentForm={setCurrentForm} closeModalWindow={closeModalWindow} /> : loginComponent;
  return <>{renderedComponent}</>;
}

export default LoginPage;
