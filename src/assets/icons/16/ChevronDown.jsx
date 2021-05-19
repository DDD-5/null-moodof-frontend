import React from 'react';

const ChevronDown = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M3 5.5L8 10.5L13 5.5" stroke={color || '#21272A'} />
  </svg>
);

export default ChevronDown;
