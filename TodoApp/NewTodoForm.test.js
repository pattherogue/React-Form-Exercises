import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component', () => {
  const { getByLabelText, getByText } = render(<NewTodoForm />);
  const taskInput = getByLabelText('Task:');
  const submitButton = getByText('Add Todo');
  expect(taskInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('form submission calls onSubmit handler with input value', () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<NewTodoForm onSubmit={onSubmit} />);
  const taskInput = getByLabelText('Task:');
  const submitButton = getByText('Add Todo');

  fireEvent.change(taskInput, { target: { value: 'Test Task' } });
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith('Test Task');
});
