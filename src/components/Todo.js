import React from 'react';

const Todo = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default Todo;
