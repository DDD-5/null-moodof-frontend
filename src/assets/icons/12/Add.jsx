import React, { memo } from 'react';

const Add = ({ color, ...args }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <g clipPath="url(#clip0)">
      <line x1="5.875" y1="-1.5" x2="5.875" y2="13.5" stroke={color || 'black'} strokeOpacity="0.6" />
      <line x1="-1.5" y1="6.125" x2="13.5" y2="6.125" stroke={color || 'black'} strokeOpacity="0.6" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default memo(Add);
