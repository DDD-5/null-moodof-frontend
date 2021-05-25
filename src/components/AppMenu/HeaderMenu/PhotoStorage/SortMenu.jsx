import React from 'react';
import { css } from '@emotion/react';

import { Check } from '../../../../assets/icons/16';

const menuStyle = css({
  width: 240,
  height: 138,
  border: '0.5px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(245, 245, 245, 0.7)',
  backdropFilter: 'blur(40px)',
  borderRadius: 4,
});

const titleWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: 40,
  padding: '0 16px',
  fontWeight: 500,
  fontSize: 14,
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
});

const buttonWrapperStyle = css({
  padding: 8,
});

const buttonStyle = (isActive) => css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 224,
  height: 40,
  borderRadius: 4,
  marginBottom: 2,
  padding: '0 12px 0 16px',
  fontSize: 14,
  cursor: 'pointer',
  backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : 'inherit',
  '&:hover': {
    backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

const SortMenu = () => (
  <div css={menuStyle}>
    <div css={titleWrapperStyle}>
      <span>정렬</span>
    </div>
    <div css={buttonWrapperStyle}>
      <div css={buttonStyle(true)}>
        <span>최신 순</span>
        <Check />
      </div>
      <div css={buttonStyle(false)}>
        <span>오래된 순</span>
      </div>
    </div>
  </div>
);

export default SortMenu;
