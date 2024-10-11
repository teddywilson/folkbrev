import React from 'react';

const TextBlock = ({ text, className }) => {
  return (
    <div className={`text-block ${className}`}>
      <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>
    </div>
  );
};

export default TextBlock;
