import React from 'react';
import classes from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';
import { Navigate } from 'react-router-dom';

function Login({ onSuсcessLogin, userLogin }) {
  if (userLogin) {
    return <Navigate to="/" />;
  }
  return (
    <div className={classes.Login}>
      <div className={classes.WhiteShadow}>
        <LoginForm onSuсcessLogin={onSuсcessLogin} />
      </div>
    </div>
  );
}

export default Login;
