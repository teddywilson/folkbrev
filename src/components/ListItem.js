import React from "react";

const ListItem = ({ children }) => {
  return (
    <li>
      <span className="list-item-text">{children}</span>
    </li>
  );
};

export default ListItem;
