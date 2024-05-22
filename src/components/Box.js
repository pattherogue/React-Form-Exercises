import React from 'react';

const Box = ({ backgroundColor, width, height, onDelete }) => {
  const boxStyle = {
    backgroundColor,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className="box" style={boxStyle}>
      <button onClick={onDelete}>X</button>
    </div>
  );
};

export default Box;
