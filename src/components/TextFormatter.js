import React from 'react';

const TextFormatter = ({ text, styles }) => {
    return (
        <>
            {text.map((item, index) => {
                if (typeof item === "string") return <>{item}</>;
                if (item.type === "link") return <a key={index} href={item.href}>{item.content}</a>;
                if (item.type === "italic") return <i>{item.content}</i>;
                if (item.type === "bold") return <span style={{
                    fontWeight: 900
                }}>{item.content}</span>;
                return null;
            })}
        </>
    );
};

export default TextFormatter;