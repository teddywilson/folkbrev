import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase"; // Ensure the correct path
import { onValue, ref, set } from "firebase/database";
import ContactText from "./ContactText";

const sanitizeEmail = (email) => {
  return email.replace(/[.#$[\]]/g, "_");
};

const ContactSelectionCard = ({ name, profession, email }) => {
  const [count, setCount] = useState(0);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const sanitizedEmail = sanitizeEmail(email);
    const countRef = ref(db, `contacts/${sanitizedEmail}`);

    const unsubscribe = onValue(countRef, (snapshot) => {
      const data = snapshot.val();
      setCount(data ? data.count : 0);
    });

    // Cleanup listener using the return function from onValue
    return () => unsubscribe();
  }, [email]);

  const handleChange = () => {
    if (!isChecked) {
      const sanitizedEmail = sanitizeEmail(email);
      const newCount = count + 1;
      set(ref(db, `contacts/${sanitizedEmail}`), { count: newCount });
      setChecked(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
      }}
    >
      <ContactText>
        {name}, {profession}
      </ContactText>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ContactText
          style={{
            cursor: !isChecked ? "pointer" : undefined,
            opacity: "1",
          }}
          onClick={!isChecked ? handleChange : null}
        >
          {!isChecked ? (
            <>
              <span
                role="img"
                aria-label="thumbs-up"
                style={{ display: "inline-block", lineHeight: 1 }}
              >
                👍
              </span>{" "}
            </>
          ) : (
            <>
              <span
                role="img"
                aria-label="checkmark"
                style={{ display: "inline-block", lineHeight: 1 }}
              >
                ✅
              </span>{" "}
            </>
          )}
        </ContactText>
        <ContactText bold={true}>{count}</ContactText>
      </div>
    </div>
  );
};

export default ContactSelectionCard;
