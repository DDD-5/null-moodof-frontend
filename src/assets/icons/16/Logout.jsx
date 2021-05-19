import React from 'react';

const Logout = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M3.5 8L14.75 8" stroke={color || '#21272A'} />
    <path d="M11 4.25L14.75 8L11 11.75" stroke={color || '#21272A'} />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 1.5H7V4.9999H8V1.5V0.5H7H1.5H0.5V1.5V14.5V15.5H1.5H7H8V14.5V10.9999H7V14.5H1.5V1.5Z" fill={color || '#21272A'} />
  </svg>
);

export default Logout;
