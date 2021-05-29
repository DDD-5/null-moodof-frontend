import React, { memo } from 'react';
import { css } from '@emotion/react';

const MasonryPhotoThumbnail = ({
  src,
  x,
  y,
  columnWidth,
}) => (
  <div css={imageStyle(x, y, columnWidth)}>
    <img className="masonry-photo" src={src} alt="" />
  </div>
);

const imageStyle = (x, y, columnWidth) => css({
  display: 'inline-block',
  position: 'absolute',
  maxWidth: columnWidth,
  transform: `translateX(${x}px) translateY(${y}px)`,
  '& > img': {
    width: '100%',
  },
});

export default memo(MasonryPhotoThumbnail);
