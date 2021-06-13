import React, { createContext, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { notification } from 'antd';
import LoginPage from '../pages/Login';
import tokenChecker from '../utils/tokenChecker';
import { Login } from '../services/api-functions';

export const LoginState = {
  Pending: 'Pending',
  Unauthenticated: 'Unauthenticated',
  Authenticated: 'Authenticated',
  Unknown: 'Unknown',
};

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(LoginState.Unauthenticated);
  const [loginLoading, setloginLoading] = useState(false);

  const onLogin = async (email, password) => {
    try {
      setloginLoading(true);
      const logresp = await Login(email, password);

      if (!logresp || !logresp?.data?.token) {
        throw Error('Hiba a bejelentkezés során');
      }

      localStorage.setItem(process.env.REACT_APP_JWTTOKEN, logresp.data.token);
      setLoginState(LoginState.Authenticated);
    } catch (err) {
      setLoginState(LoginState.Unauthenticated);
      if (err?.response?.status === 401) {
        notification.error({
          message: 'Hiba történt!',
          description: 'Rossz felhasználónév vagy jelszó',
        });
      } else {
        notification.error({
          message: 'Hiba történt!',
          description: err?.message || 'Hálózati hiba',
        });
      }
    } finally {
      setloginLoading(false);
    }
  };

  const onLogout = () => {
    localStorage.removeItem(process.env.REACT_APP_JWTTOKEN);
    setLoginState(LoginState.Unauthenticated);
  };

  useEffect(() => {
    const token = tokenChecker();
    if (token) {
      console.log('BELÉPVE', token);
      setLoginState(LoginState.Authenticated);
    } else {
      console.log('Nincs TOKEN', token);
      setLoginState(LoginState.Unauthenticated);
    }
  }, []);

  return (
    <>
      <AuthenticationContext.Provider value={{ loginState, onLogout }}>
        {loginState === LoginState.Pending ? <p>Loading. Please wait...</p> : null}
        {loginState === LoginState.Authenticated ? children : null}
        {loginState === LoginState.Unauthenticated || loginState === LoginState.Unknown ? (
          <Switch>
            <Route exact path="/" render={() => <LoginPage onLogin={onLogin} loading={loginLoading} />} />
          </Switch>
        ) : null}
      </AuthenticationContext.Provider>
    </>
  );
};
export default AuthenticationProvider;
