import React from 'react';
import { css } from '@emotion/react';
import { Sort, Filter } from '../../../assets/icons/24';
import { Plus } from '../../../assets/icons/16';

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 48,
  height: 48,
  marginRight: 8,
  cursor: 'pointer',
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon }) => (
  <div css={iconBlockStyle}>
    <Icon />
  </div>
);

const Default = () => (
  <>
    <WrappedIcon Icon={Sort} />
    <WrappedIcon Icon={Filter} />
    <WrappedIcon Icon={Plus} />
  </>
);

export default Default;
