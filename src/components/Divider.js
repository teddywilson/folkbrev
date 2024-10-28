import React from 'react';

const Divider = () => {
    return (
        <div style={{
            display: 'flex',
            width: '64px',
            height: '5px',
            marginTop: '-2px'
        }}>
            <div style={{
                background: '#149954',
                flexGrow: '1',
            }} />
            <div style={{
                background: '#ED1C24',
                flexGrow: '1',
            }} />
        </div>
    );
};

export default Divider;
