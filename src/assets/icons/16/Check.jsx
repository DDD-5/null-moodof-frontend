import React from 'react';

const Check = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M1.75 8.69079L5.75 12.375L14.25 3.625" stroke={color || '#21272A'} />
  </svg>
);

export default Check;
