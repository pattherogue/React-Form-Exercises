import React, { useState } from 'react';

const NewBoxForm = ({ onSubmit }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ width, height, color });
    setWidth('');
    setHeight('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Width:</label>
      <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} /><br />
      <label>Height:</label>
      <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} /><br />
      <label>Background Color:</label>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /><br />
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;
