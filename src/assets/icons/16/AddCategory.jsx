import React, { memo } from 'react';

const AddCategory = ({ color, ...args }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <path d="M1 13.4229V4H15V14H14.4818H1.53861H1V13.4229Z" stroke={color || '#21272A'} strokeMiterlimit="3" />
    <path d="M1 4V2H5L7 4" stroke={color || '#21272A'} strokeMiterlimit="3" />
    <line x1="5.5" y1="9" x2="10.5" y2="9" stroke={color || '#21272A'} />
    <line x1="8" y1="11.5" x2="8" y2="6.5" stroke={color || '#21272A'} />
  </svg>
);

export default memo(AddCategory);
