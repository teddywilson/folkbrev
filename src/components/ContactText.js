import React from "react";

const ContactText = ({ bold, children, style, onClick }) => {
  return (
    <h4
      style={{
        fontWeight: bold ? 900 : 400,
        marginTop: 0,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </h4>
  );
};

export default ContactText;
