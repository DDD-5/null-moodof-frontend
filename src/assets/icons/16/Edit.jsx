import React, { memo } from 'react';

const Edit = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M11.3125 1.46875L12.4167 2.57292L13.5208 3.67708L4.25 12.9479H2.04167V10.7396L11.3125 1.46875ZM11.3125 0L1 10.3125V14H4.6875L15 3.6875L13.1563 1.84375L11.3125 0Z" fill={color || '#21272A'} />
    <line y1="15.5" x2="16" y2="15.5" stroke={color || '#21272A'} />
  </svg>
);

export default memo(Edit);
