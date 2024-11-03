import React from "react";

import { isMobile } from "react-device-detect";

const ContactCardContainer = ({ header, children }) => {
  return (
    <div
      className="contact-card-container"
      style={{
        gap: isMobile ? "0px" : "16px",
      }}
    >
      {isMobile && <h5>{header}</h5>}
      {children}
    </div>
  );
};

export default ContactCardContainer;
