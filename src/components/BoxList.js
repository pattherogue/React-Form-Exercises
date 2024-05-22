// BoxList.js
import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const handleAddBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const handleDeleteBox = (index) => {
    const newBoxes = [...boxes];
    newBoxes.splice(index, 1);
    setBoxes(newBoxes);
  };

  return (
    <div>
      <NewBoxForm onSubmit={handleAddBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          backgroundColor={box.color}
          width={box.width}
          height={box.height}
          onDelete={() => handleDeleteBox(index)}
        />
      ))}
    </div>
  );
};

export default BoxList;
