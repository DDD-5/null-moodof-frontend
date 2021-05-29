import React, { memo } from 'react';

const Small = ({ ...args }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...args}>
    <rect width="24" height="24" rx="2" fill="#21272A" />
    <path d="M18 15.7452C17.4209 15.5924 17.3405 15.1168 17.3405 14.1826V10.6497C17.3405 8.59448 16.5523 8 15.2654 8C14.252 8 13.2225 8.78132 12.9008 9.81741C12.6917 8.54352 12 8 10.874 8C9.86059 8 8.91153 8.76433 8.50938 9.74947V8L6 8.57749V8.83227C6.65952 9.12102 6.80429 9.40977 6.80429 10.0042V14.1996C6.80429 15.0658 6.7882 15.5584 6.17694 15.7452V16H9.1689V15.7452C8.6059 15.5754 8.50938 15.1338 8.50938 14.1996V10.4628C8.57373 9.86836 9.21716 9.03609 9.92493 9.03609C10.7936 9.03609 11.2279 9.61359 11.2279 10.7006V14.1826C11.2279 15.0488 11.1957 15.5584 10.5845 15.7452V16H13.5925V15.7452C13.0134 15.5924 12.933 15.1168 12.933 14.1826L12.9169 10.7176C12.9169 10.6327 12.9169 10.5648 12.9169 10.4968C12.9169 9.85138 13.6086 9.03609 14.3164 9.03609C15.185 9.03609 15.6354 9.61359 15.6354 10.7006V14.1826C15.6354 15.0488 15.6032 15.5584 14.992 15.7452V16H18V15.7452Z" fill="white" />
  </svg>
);

export default memo(Small);
