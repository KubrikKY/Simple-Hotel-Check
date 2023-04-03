import React from 'react';
import classes from './Login.module.scss';
import LoginForm from './LoginForm/LoginForm';
function Login({ onSuсcessLogin }) {
  return (
    <div className={classes.Login}>
      <div className={classes.WhiteShadow}>
        <LoginForm onSuсcessLogin={onSuсcessLogin} />
      </div>
    </div>
  );
}

export default Login;
