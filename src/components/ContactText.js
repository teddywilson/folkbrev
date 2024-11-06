import React from "react";

const ContactText = ({ bold, children }) => {
  return (
    <div>
      <h4
        style={{
          fontWeight: bold ? 900 : 400,
          marginTop: 0,
        }}
      >
        {children}
      </h4>
    </div>
  );
};

export default ContactText;
