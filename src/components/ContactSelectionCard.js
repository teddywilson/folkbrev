import React, { useState, useEffect } from "react";
import { db } from "../utils/firebase"; // Ensure the correct path
import { onValue, ref, set } from "firebase/database";

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
        </h4>
        <h5>{count}</h5>
      </div>
    </div>
  );
};

export default ContactSelectionCard;
