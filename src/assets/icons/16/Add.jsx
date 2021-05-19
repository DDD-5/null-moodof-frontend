import React from 'react';

const Add = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <line x1="7.875" y1="0.5" x2="7.875" y2="15.5" stroke={color || '#21272A'} />
    <line x1="0.5" y1="8.125" x2="15.5" y2="8.125" stroke={color || '#21272A'} />
  </svg>
);

export default Add;
