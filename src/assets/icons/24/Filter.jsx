import React from 'react';

const Filter = ({ color, ...args }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M3 4.5L10.2 12.9089V19.2222L13.8 21V12.9089L21 4.5H3Z" stroke={color || '#21272A'} strokeWidth="1.4" />
  </svg>
);

export default Filter;
