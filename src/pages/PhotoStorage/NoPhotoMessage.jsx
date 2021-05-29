import React from 'react';
import { css } from '@emotion/react';
import { APP } from '../../constants';

const noPhotoWrapperStyle = css({
  minHeight: `calc(100vh - ${APP.headerHeight}px)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const noPhotoStyle = css({
  '& h1': {
    color: 'rgba(0, 0, 0, 0.6)',
    marginBottom: 8,
  },
  '& span': {
    display: 'block',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
  },
});

const NoPhotoMessage = () => (
  <div css={noPhotoWrapperStyle}>
    <div css={noPhotoStyle}>
      <h1>이미지 보관함이 비어있습니다.</h1>
      <span>무드피커를 이용해 이미지를 가져오거나</span>
      <span>기기에서 이미지를 업로드하세요.</span>
    </div>
  </div>
);

export default NoPhotoMessage;
