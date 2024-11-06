import React from "react";

const ContactOutreachCard = ({ name, profession, email }) => {
  const mailto = "mailto:" + email;
  return (
    <>
      {" "}
      <div>
        <h4>
          <span
            style={{
              fontWeight: 400,
            }}
          >
            {name}, {profession}
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
    </>
  );
};

export default ContactOutreachCard;
