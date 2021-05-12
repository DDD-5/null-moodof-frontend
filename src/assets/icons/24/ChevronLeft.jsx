import React from 'react';

const ChevronLeft = ({ color, ...args }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M15 6L9 12L15 18" stroke={color || 'white'} strokeWidth="1.5" />
  </svg>
);

export default ChevronLeft;
