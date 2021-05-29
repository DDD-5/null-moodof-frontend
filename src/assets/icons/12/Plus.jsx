import React, { memo } from 'react';

const Plus = ({ color, ...args }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <line x1="6" y1="3.5" x2="6" y2="8.5" stroke={color || '#A2A9B0'} />
    <line x1="3.5" y1="6" x2="8.5" y2="6" stroke={color || '#A2A9B0'} />
  </svg>
);

export default memo(Plus);
