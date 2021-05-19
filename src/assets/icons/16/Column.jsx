import React from 'react';

const Column = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <rect x="1" y="1" width="3.375" height="14" stroke={color || '#21272A'} />
    <rect x="11.625" y="1" width="3.375" height="14" stroke={color || '#21272A'} />
    <rect x="6.3125" y="1" width="3.375" height="14" stroke={color || '#21272A'} />
  </svg>
);

export default Column;
