import React, { useState } from "react";

const ContactSelectionCard = ({ name, profession }) => {
  const [count, setCount] = useState(Math.floor(Math.random() * 30));
  const [isChecked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!isChecked);
    setCount(count + 1);
  };

  return (
    <div
      className="contact-selection-card"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "baseline",
      }}
    >
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4
          style={{
            cursor: !isChecked ? "pointer" : undefined,
            opacity: "1",
          }}
          onClick={!isChecked ? handleChange : null}
        >
          {!isChecked ? (
            <>
              <span role="img" aria-label="thumbs-up">
                👍
              </span>{" "}
            </>
          ) : (
            <>
              <span role="img" aria-label="checkmark">
                ✅
              </span>{" "}
            </>
          )}
        </h4>
        <h5>{count}</h5>
      </div>
    </div>
  );
};

export default ContactSelectionCard;
