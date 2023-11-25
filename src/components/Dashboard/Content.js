import React from 'react';
import Profile from '../Content-items/Profile';
import ToDoList from '../Content-items/ToDoList';
import { Route, Routes } from 'react-router-dom';

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
      
    </div>
  );
};

export default Content;