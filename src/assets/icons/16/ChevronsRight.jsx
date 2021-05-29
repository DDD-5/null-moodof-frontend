import React, { memo } from 'react';

const ChevronsRight = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M3 13L8 8L3 3" stroke={color || '#21272A'} />
    <path d="M8 13L13 8L8 3" stroke={color || '#21272A'} />
  </svg>
);

export default memo(ChevronsRight);
