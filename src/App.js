// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <Router>
      { !isAuthenticated && <Navigate to="/login" /> }
      <Routes>
        <Route exact path="/" element={<Dashboard />} >
          <Route exact path="/profile" element={<Dashboard />} />
          <Route exact path="/todolist" element={<Dashboard />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
