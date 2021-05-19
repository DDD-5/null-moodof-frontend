import React from 'react';

const ChevronUp = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M3 10.5L8 5.5L13 10.5" stroke={color || 'black'} strokeOpacity="0.4" />
  </svg>
);

export default ChevronUp;
