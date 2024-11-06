import React from "react";

const ListItem = ({ number, children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "0.5rem",
        gap: "0.5rem"
      }}
    >
      <h3
        style={{
          flexShrink: 0,
          fontWeight: 900,
        }}
      >
        {number}.
      </h3>
      <h3>{children}</h3>
    </div>
  );
};

export default ListItem;
