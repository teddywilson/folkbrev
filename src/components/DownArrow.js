import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const DownArrow = () => (
  <div style={{ textAlign: 'center', marginTop: '16px' }}>
    <FontAwesomeIcon icon={faArrowDown} size="1x" />
  </div>
);

export default DownArrow;
