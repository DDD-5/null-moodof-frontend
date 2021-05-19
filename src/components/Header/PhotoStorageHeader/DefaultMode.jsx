import React from 'react';
import { css } from '@emotion/react';
import { Sort, Filter, Add } from '../../../assets/icons/16';

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  marginRight: 8,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon }) => (
  <div css={iconBlockStyle}>
    <Icon />
  </div>
);

const DefaultMode = () => (
  <>
    <WrappedIcon Icon={Sort} />
    <WrappedIcon Icon={Filter} />
    <WrappedIcon Icon={Add} />
  </>
);

export default DefaultMode;
