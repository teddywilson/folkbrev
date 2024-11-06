import React from "react";

import { isMobile } from "react-device-detect";

const ContactCardContainer = ({ children }) => {
  return (
    <div
      className="contact-card-container"
      style={{
        gap: isMobile ? "8px" : "16px",
      }}
    >
      {children}
    </div>
  );
};

export default ContactCardContainer;
