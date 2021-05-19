import React from 'react';

const Spacing = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M13.4863 6.47222L13.4863 1.125" stroke={color || '#21272A'} />
    <path d="M11.4808 3.13021L13.486 1.125L15.4912 3.13021" stroke={color || '#21272A'} />
    <path d="M13.4863 9.52973L13.4863 14.877" stroke={color || '#21272A'} />
    <path d="M15.4919 12.8717L13.4867 14.877L11.4814 12.8717" stroke={color || '#21272A'} />
    <line x1="0.5" y1="1.25" x2="9.25" y2="1.25" stroke={color || '#21272A'} />
    <line x1="0.5" y1="4.6875" x2="9.25" y2="4.6875" stroke={color || '#21272A'} />
    <line x1="0.5" y1="8.125" x2="9.25" y2="8.125" stroke={color || '#21272A'} />
    <line x1="0.5" y1="15" x2="9.25" y2="15" stroke={color || '#21272A'} />
    <line x1="0.5" y1="11.5625" x2="9.25" y2="11.5625" stroke={color || '#21272A'} />
  </svg>
);

export default Spacing;
