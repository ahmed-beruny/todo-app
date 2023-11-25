// Login.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login = () => {
  const {loginWithRedirect } = useAuth0();
  return (
    <div className='login-container'>
      <h1>Learnathon 2.0</h1>
      <h2>Ahmed Al Beruny</h2>
      {/*auth0 login button*/}
      <button onClick={() => loginWithRedirect()}>Login</button>

    </div>
  );
};

export default Login;
