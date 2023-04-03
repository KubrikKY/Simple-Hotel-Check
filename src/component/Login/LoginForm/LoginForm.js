import React, { useState } from 'react';
import classes from './LoginForm.module.scss';
import Title from '../../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLoginAction,
  setPasswordAction,
} from '../../../state/reducer/reducerUser';

function LoginForm({ onSuсcessLogin }) {
  const dispatch = useDispatch();
  const [login, password] = useSelector((state) => [
    state.user.login,
    state.user.password,
  ]);

  const [validForm, setValidForm] = useState({
    login: false,
    password: false,
  });

  let onSubmit = (e) => e.preventDefault();

  if (validForm.login && validForm.password) {
    onSubmit = onSuсcessLogin;
  }

  // LOGIN

  const setLogin = (input) => {
    onInputEmail(input);
    dispatch(setLoginAction(input.value));
  };

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const onInputEmail = (input) => {
    if (isEmailValid(input.value)) {
      input.style.borderColor = 'green';
      setValidForm({ ...validForm, login: true });
    } else {
      input.style.borderColor = 'red';
      setValidForm({ ...validForm, login: false });
    }
  };

  const isEmailValid = (value) => {
    return EMAIL_REGEXP.test(value);
  };

  // PASSWORD

  const setPassword = (input) => {
    onInputPassword(input);
    dispatch(setPasswordAction(input.value));
  };

  const PASSWORD_REGEXP = /^[А-ЯЁ][а-яё]*$/;

  const onInputPassword = (input) => {
    if (isPasswordValid(input.value)) {
      input.style.borderColor = 'green';
      setValidForm({ ...validForm, password: true });
    } else {
      input.style.borderColor = 'red';
      setValidForm({ ...validForm, password: false });
    }
  };

  const isPasswordValid = (value) => {
    return value.length > 8 && !PASSWORD_REGEXP.test(value);
  };

  return (
    <div className={classes.LoginForm}>
      <Title />
      <form className={classes.Form} onSubmit={onSubmit}>
        <label>
          {!validForm.login ? (
            <p className={classes.Warning}>Логин</p>
          ) : (
            <p>Логин</p>
          )}

          <input
            type="email"
            onChange={(e) => setLogin(e.target)}
            value={login}
          ></input>
          {!validForm.login && <span>Введите e-mail</span>}
        </label>
        <label>
          {!validForm.password ? (
            <p className={classes.Warning}>Пароль</p>
          ) : (
            <p>Пароль</p>
          )}
          <input
            type="password"
            onChange={(e) => setPassword(e.target)}
            value={password}
          ></input>
          {!validForm.password && <span>Пароль минимум 8 символов</span>}
        </label>
        <input type="submit" value="Войти" />
      </form>
    </div>
  );
}

export default LoginForm;
