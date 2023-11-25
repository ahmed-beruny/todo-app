// Header.js
import React from 'react';
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user,logout } = useAuth0();
  if(!user){
    return <div>Loading...</div>
  }

  return (
    <div className='header-container'>

      <div className='left'>
        <Link to='/profile'>Profile</Link>
        <Link to='/todolist'>ToDoList</Link>
      </div>

      <div className='right'>
        <Link to='/profile'>{user.name}</Link>
        <button onClick={() => logout()}>Logout</button>
      </div>


    </div>
  );
};

export default Header;

