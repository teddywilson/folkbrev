import React, { useRef } from 'react';

const BubbleContainer = ({ children }) => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="bubble-container">
            {children}
        </div>
    );
};

export default BubbleContainer;
