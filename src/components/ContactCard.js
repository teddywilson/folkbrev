import React from "react";

const ContactCard = ({ name, profession, email }) => {
  const mailto = "mailto:" + email;
  return (
    <div>
      <h4>
        {name}{" "}
        <span
          style={{
            fontWeight: 400,
          }}
        >
          {profession}
        </span>
      </h4>
      <h4>
        <span
          style={{
            fontWeight: 400,
            marginTop: 0,
          }}
        >
          <a href={mailto}>{email}</a>
        </span>
      </h4>
    </div>
  );
};

export default ContactCard;
