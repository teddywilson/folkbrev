import React from "react";

import { isMobile } from "react-device-detect";

const ContactCardContainer = ({ header, children }) => {
  return (
    <div
      className="contact-card-container"
      style={{
        gap: isMobile ? "2px" : "16px",
      }}
    >
      {isMobile && <h3 style={{ fontWeight: "800" }}>{header}</h3>}
      {children}
    </div>
  );
};

export default ContactCardContainer;
