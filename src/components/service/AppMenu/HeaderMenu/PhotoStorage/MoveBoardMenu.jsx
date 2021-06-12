import React from 'react';
import { css } from '@emotion/react';

import MenuFrame from './MenuFrame';
import { Button } from '../../../..';
import { ChevronUp } from '../../../../../assets/icons/16';

const MoveBoardMenu = () => (
  <MenuFrame width={240} maxHeight={440}>
    <div css={titleWrapperStyle}>
      <span>이동</span>
    </div>
    <div css={categoryListStyle}>
      <Category />
      <Category />
      <Category />
    </div>
    <div css={buttonContainerStyle}>
      <Button colorType="main" customStyle={{ width: 58, height: 32 }}>이동</Button>
    </div>
  </MenuFrame>
);

const Category = () => (
  <div css={categoryStyle}>
    <div css={categoryTitleStyle}>
      <ChevronUp color="rgba(0, 0, 0, 0.4)" css={{ marginRight: 8, cursor: 'pointer' }} />
      <span className="category-name">카테고리</span>
    </div>
    <div css={boardListStyle}>
      <Board />
      <Board />
      <Board />
    </div>
  </div>
);

const Board = () => (
  <div css={boardNameStyle}>
    <span className="board-name">보드명</span>
    <input type="checkbox" />
  </div>
);

const titleWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: 40,
  padding: '0 16px',
  fontWeight: 500,
  fontSize: 14,
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
});

const categoryListStyle = css({
  padding: '0 8px',
  paddingTop: 2.5,
  marginBottom: 72,
  maxHeight: 330,
  overflow: 'scroll',
});

const categoryStyle = css({
  padding: '5.5px 0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
});

const categoryTitleStyle = css({
  height: 24,
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px 0 8px',
  color: '#A2A9B0',
  fontSize: 12,
  '& span': {
    width: 165,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

const boardListStyle = css({
  marginTop: 5,
});

const boardNameStyle = css({
  height: 40,
  fontSize: 14,
  padding: '0 12px 0 32px',
  marginBottom: 5,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'none',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  '&:last-child': {
    marginBottom: 0,
  },
  '& span': {
    width: 165,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

const buttonContainerStyle = css({
  width: '100%',
  height: 48,
  borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '0 16px',
  position: 'fixed',
  bottom: 0,
});

export default MoveBoardMenu;
