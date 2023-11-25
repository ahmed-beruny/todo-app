// Login.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const {loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Learnathon 2.0</h1>
      <h2>Your Full Name</h2>
      {/*auth0 login button*/}
      <button onClick={() => loginWithRedirect()}>Login</button>

    </div>
  );
};

export default Login;
