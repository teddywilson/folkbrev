import React from "react";

import { BrowserView, MobileView } from "react-device-detect";

const ContactOutreachCard = ({ name, profession, email }) => {
  const mailto = "mailto:" + email;
  return (
    <>
      {" "}
      <BrowserView>
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
      </BrowserView>
      <MobileView>
        <div>
          <h4>
            <a href={mailto}>{name}</a>{" "}
            <span
              style={{
                fontWeight: 400,
              }}
            >
              {profession}
            </span>
          </h4>
        </div>
      </MobileView>
    </>
  );
};

export default ContactOutreachCard;
