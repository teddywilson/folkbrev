import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';

const DownArrow = () => (
  <div style={{ textAlign: 'center', marginTop: '24px' }}>
    <FontAwesomeIcon icon={faLongArrowDown} size="1x" />
  </div>
);

export default DownArrow;
