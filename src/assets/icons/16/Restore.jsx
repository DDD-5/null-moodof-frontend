import React from 'react';

const Restore = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M8 6.5L8 7.22917L8 13.0625" stroke={color || '#21272A'} />
    <path d="M5.5 9L8 6.5L10.5 9" stroke={color || '#21272A'} />
    <path d="M0 3.5H1.77778H16" stroke={color || '#21272A'} />
    <path d="M3 3.5H13V13.5C13 14.6046 12.1046 15.5 11 15.5H5C3.89543 15.5 3 14.6046 3 13.5V3.5Z" stroke={color || '#21272A'} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 0.5H11.5V3.5H4.5V0.5Z" stroke={color || '#21272A'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Restore;
