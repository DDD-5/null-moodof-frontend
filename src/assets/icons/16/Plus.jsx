import React from 'react';

const Plus = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.30957 8.70067L7.3 15.9998L8.7 16.0016L8.70957 8.70067H16V7.30067H8.7114L8.72097 0.00159082L7.32097 -0.000244141L7.3114 7.30067H0V8.70067H7.30957Z" fill={color || '#21272A'} />
  </svg>
);

export default Plus;
