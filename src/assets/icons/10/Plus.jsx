import React from 'react';

const Plus = ({ color, ...args }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <g clipPath="url(#clip0)">
      <line x1="4.875" y1="-2.5" x2="4.875" y2="12.5" stroke={color || '#4D5358'} />
      <line x1="-2.5" y1="5.125" x2="12.5" y2="5.125" stroke={color || '#4D5358'} />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="10" height="10" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default Plus;
