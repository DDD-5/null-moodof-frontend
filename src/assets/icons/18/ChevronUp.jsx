import React from 'react';

const ChevronUp = ({ color, ...args }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M13.5 11.25L9 6.75L4.5 11.25" stroke={color || '#A2A9B0'} strokeWidth="1.2" />
  </svg>

);

export default ChevronUp;
