import React from 'react';

const Fold = ({ color, ...args }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M9 9L9 23" stroke={color || '#A2A9B0'} strokeWidth="1.5" />
    <path d="M25 16H13" stroke={color || '#A2A9B0'} strokeWidth="1.5" />
    <path d="M19 22L13 16L19 10" stroke={color || '#A2A9B0'} strokeWidth="1.5" />
  </svg>
);

export default Fold;
