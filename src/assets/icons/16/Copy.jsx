import React from 'react';

const Copy = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M15 5H5V15H15V5Z" stroke={color || '#21272A'} />
    <path fillRule="evenodd" clipRule="evenodd" d="M1 0.5H0.5V1V11V11.5H1H4V10.5H1.5V1.5H10.5V4H11.5V1V0.5H11H1Z" fill={color || '#21272A'} />
  </svg>
);

export default Copy;
