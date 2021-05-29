import React, { memo } from 'react';

const TrashCan = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M6.35938 6L6.35937 6.72917L6.35937 12.5625" stroke={color || '#21272A'} />
    <path d="M9.64062 6L9.64062 6.72917L9.64062 12.5625" stroke={color || '#21272A'} />
    <path d="M0 3.5H1.77778H16" stroke={color || '#21272A'} />
    <path d="M3 3.5H13V13.5C13 14.6046 12.1046 15.5 11 15.5H5C3.89543 15.5 3 14.6046 3 13.5V3.5Z" stroke={color || '#21272A'} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 0.5H11.5V3.5H4.5V0.5Z" stroke={color || '#21272A'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default memo(TrashCan);
