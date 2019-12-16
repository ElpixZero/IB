import React from 'react';
import axios from 'axios';
import PasswordIcon from '../../img/passwordIcon.svg';
import close from '../../img/close.svg';

import './index.css';

function RegisterPage({closeModalWindow}) {
  const [email, setEmail] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onRegister = async e => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    const ans = await axios({
      method: 'post',
      url: 'https://hard-rock.site:1443/api/user/new',
      data: JSON.stringify(data),
    });

    console.log(ans);
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
          className="formField"
          placeholder="Адрес электронной почты"
        />
        <input
          id="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
          className="formField formFieldPassword"
          type="password"
          placeholder="Пароль"
        />
        <input
          id="repeatPassword"
          onChange={e => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          className="formField formFieldPassword"
          type="password"
          placeholder="Повторите пароль"
        />
        <input type="checkbox" />
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
