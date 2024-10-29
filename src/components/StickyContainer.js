import React, { useRef } from 'react';
import Divider from './Divider';

const StickyContainer = ({ heading, text, children }) => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="sticky-container">
      {heading && <h2>{heading}</h2>}
      {(heading && text) &&
        <>
          <h3>{`\n`}</h3>
          <Divider />
        </>
      }
      {text && <h3>{text}</h3>}
      {children}
    </div>
  );
};

export default StickyContainer;
