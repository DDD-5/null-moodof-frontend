import React, { memo } from 'react';

const SquareOn = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <rect x="2" y="5" width="12" height="6" stroke={color || '#21272A'} />
    <path d="M10 13L8 15L6 13" stroke={color || '#21272A'} />
    <path d="M6 3L8 1L10 3" stroke={color || '#21272A'} />
  </svg>
);

export default memo(SquareOn);
