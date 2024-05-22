import React, { useState } from 'react';

const NewTodoForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task:</label>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} /><br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
