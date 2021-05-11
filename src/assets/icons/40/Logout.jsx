import React from 'react';

const Logout = ({ color, ...args }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M14 20L29 20" stroke={color || '#9E9E9E'} strokeWidth="1.5" />
    <path d="M24 15L29 20L24 25" stroke={color || '#9E9E9E'} strokeWidth="1.5" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 11.5H18.5V16H20V11.5V10H18.5H11.5H10V11.5V28.5V30H11.5H18.5H20V28.5V24H18.5V28.5H11.5V11.5Z" fill={color || '#9E9E9E'} />
  </svg>

);

export default Logout;
