// ToDoList.js
import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    setItems([inputValue, ...items]);
    setInputValue('');
  };
  // console.log(items);

  const handleCheck = (index) => {
    // Move the checked item to a separate list
    const checkedItem = items[index];
    setNewItem([checkedItem, ...newItem]);
    setItems(items.filter((_, i) => i !== index));
    
  };

  const handleRemove = (index) => {
    setNewItem(newItem.filter((_, i) => i !== index));
  };

  // Additional logic for removing checked items and rendering strikethrough text

  return (
    <div className='list-container'>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleCheck(index)}>Check</button>
            
          </li>
        ))
        }
        <br />
        <br />
        {
          newItem.map((item, index) => (
            <li key={index}>
              <span className='toBeRemoved'>{item}</span>
              <button className='remove-btn' onClick={() => handleRemove(index)}>Remove</button>
              
            </li>
          ))
        }
        
      </ul>
      <div className='add-list'>
      <input 
        type='text'
        placeholder='Add a new item'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='add-todo-btn' onClick={handleAddItem}>Add</button>

      </div>
      

    </div>
  );
};

export default ToDoList;
