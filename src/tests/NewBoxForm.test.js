import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm component', () => {
  const { getByLabelText, getByText } = render(<NewBoxForm />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const submitButton = getByText('Add Box');
  expect(widthInput).toBeInTheDocument();
  expect(heightInput).toBeInTheDocument();
  expect(colorInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('form submission calls onSubmit handler with input values', () => {
  const onSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm onSubmit={onSubmit} />);
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const colorInput = getByLabelText('Background Color:');
  const submitButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(colorInput, { target: { value: 'red' } });
  fireEvent.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({ width: '100', height: '100', color: 'red' });
});
