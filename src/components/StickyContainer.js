import React, { useRef } from 'react';

const StickyContainer = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="sticky-container">
      {children}
    </div>
  );
};

export default StickyContainer;
