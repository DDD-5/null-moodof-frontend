import React from 'react';
import { css } from '@emotion/react';
import { ChevronDown } from '../../assets/icons';

const projectStyle = css({
  padding: '10.5px 0 16.5px 0',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  '&:last-child': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
});

const projectNameStyle = css({
  height: 24,
  display: 'flex',
  alignItems: 'center',
  color: '#A2A9B0',
  fontSize: 12,
});

const boardListStyle = css({
  marginTop: 4,
});

const boardNameStyle = css({
  height: 40,
  fontSize: 14,
  paddingLeft: 17,
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  '&::before': {
    content: "''",
    width: 6,
    height: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginRight: 15,
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

const Project = () => (
  <div css={projectStyle}>
    <div css={projectNameStyle}>
      <ChevronDown css={{ marginRight: '2px' }} />
      <span>프로젝트 A</span>
    </div>
    <ul css={boardListStyle}>
      <li css={boardNameStyle}>보드명</li>
      <li css={boardNameStyle}>보드명</li>
      <li css={boardNameStyle}>보드명</li>
    </ul>
  </div>
);

export default Project;
