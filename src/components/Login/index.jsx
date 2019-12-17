import React from 'react';
import axios from 'axios';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

import RegisterForm from '../Register';
import './index.css';

const ModalModalExample = ({isOpenModal}) => (
  <Modal open={isOpenModal}>
    <Modal.Content image>
      <LoginPage />
    </Modal.Content>
  </Modal>
);

function LoginPage() {
  const [goToRegister, setGoToRegister] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onRegister = async e => {
    e.preventDefault();

    const ans1 = await axios({
      method: 'get',
      url: 'https://hard-rock.site:1443/test',
    });

    const data = {
      email,
      password,
    };

    console.log(data);

    const ans = await axios({
      method: 'post',
      url: 'https://hard-rock.site:1443/api/user/login',
      data: JSON.stringify(data),
    });
  };

  const loginComponent = (
    <form className="form" onSubmit={e => onRegister(e)}>
      <h1 className="formTitle">Вход</h1>
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
        <p onClick={() => alert('OK')} className="formForgetPassword">
          Забыли пароль?
        </p>
        <input type="submit" className="loginButton" value="Войти" />
      </div>
      <div className="goToRegister">
        <p className="isRegisteredMessage">Не зарегестрированны?</p>
        <button
          onClick={() => setGoToRegister(true)}
          className="goToRegisterButton"
        >
          Создать учетную запись
        </button>
      </div>
    </form>
  );

  const renderedComponent = goToRegister ? <RegisterForm /> : loginComponent;
  return <>{renderedComponent}</>;
}

export default ModalModalExample;
