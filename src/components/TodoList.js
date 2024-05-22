import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    setTodos([...todos, task]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <NewTodoForm onSubmit={handleAddTodo} />
      {todos.map((todo, index) => (
        <Todo key={index} task={todo} onDelete={() => handleDeleteTodo(index)} />
      ))}
    </div>
  );
};

export default TodoList;
