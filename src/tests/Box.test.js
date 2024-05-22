import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

test('renders Box component with given props', () => {
  const { container } = render(<Box backgroundColor="red" width={100} height={100} />);
  const box = container.querySelector('.box');
  expect(box).toHaveStyle({
    backgroundColor: 'red',
    width: '100px',
    height: '100px',
  });
});

test('renders Box component with delete button', () => {
  const onDelete = jest.fn();
  const { getByText } = render(<Box backgroundColor="blue" width={50} height={50} onDelete={onDelete} />);
  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);
  expect(onDelete).toHaveBeenCalled();
});
