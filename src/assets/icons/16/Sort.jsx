import React from 'react';

const Sort = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M8 4.5498L4.25 0.799805L0.5 4.5498" stroke={color || '#21272A'} />
    <path d="M8 11.4502L11.75 15.2002L15.5 11.4502" stroke={color || '#21272A'} />
    <path d="M4.25 10.7998V0.799805" stroke={color || '#21272A'} />
    <path d="M11.75 5.2002L11.75 15.2002" stroke={color || '#21272A'} />
  </svg>
);

export default Sort;
