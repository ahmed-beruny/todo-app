// ToDoList.js
import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([newItem, ...items]);
    setNewItem('');
  };

  const handleCheck = (index) => {
    // Move the checked item to a separate list
    //const checkedItem = items[index];
    setItems(items.filter((_, i) => i !== index));
    
  };

  // Additional logic for removing checked items and rendering strikethrough text

  return (
    <div className='list-container'>
      <button className='add-todo-btn' onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleCheck(index)}>Check</button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
