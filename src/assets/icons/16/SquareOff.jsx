import React from 'react';

const SquareOff = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <rect x="2" y="5" width="12" height="6" stroke={color || '#21272A'} />
    <path d="M6 15L8 13L10 15" stroke={color || '#21272A'} />
    <path d="M6 1L8 3L10 1" stroke={color || '#21272A'} />
  </svg>
);

export default SquareOff;
