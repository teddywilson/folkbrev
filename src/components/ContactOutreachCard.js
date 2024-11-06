import React from "react";

import ContactText from "./ContactText";

const ContactOutreachCard = ({ name, profession, email }) => {
  const mailto = "mailto:" + email;
  return (
    <>
      {" "}
      <div>
        <ContactText>
          {name}, {profession}
        </ContactText>
        <ContactText>
          <a href={mailto}>{email}</a>
        </ContactText>
      </div>
    </>
  );
};

export default ContactOutreachCard;
