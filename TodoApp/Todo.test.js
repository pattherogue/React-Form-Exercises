import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component with task', () => {
  const { getByText } = render(<Todo task="Test Task" />);
  const taskElement = getByText('Test Task');
  expect(taskElement).toBeInTheDocument();
});

test('renders Todo component with delete button', () => {
  const onDelete = jest.fn();
  const { getByText } = render(<Todo task="Test Task" onDelete={onDelete} />);
  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);
  expect(onDelete).toHaveBeenCalled();
});
