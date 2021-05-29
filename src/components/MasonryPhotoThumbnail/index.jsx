import React from 'react';
import { css } from '@emotion/react';

const MasonryPhotoThumbnail = ({
  src,
  x,
  y,
  columnWidth,
}) => {
  const imageStyle = css({
    display: 'inline-block',
    position: 'absolute',
    maxWidth: columnWidth,
    transform: `translateX(${x}px) translateY(${y}px)`,
    '& > img': {
      width: '100%',
    },
  });

  return (
    <div css={imageStyle}>
      <img className="masonry-photo" src={src} alt="" />
    </div>
  );
};

export default MasonryPhotoThumbnail;
