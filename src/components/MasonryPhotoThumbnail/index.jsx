import React from 'react';
import { css } from '@emotion/react';

const MasonryPhotoThumbnail = ({
  id,
  src,
  x,
  y,
  isFirstColumn,
  isLastColumn,
  columnWidth,
  spacingSize,
}) => {
  const imageStyle = css({
    display: 'inline-block',
    position: 'absolute',
    maxWidth: columnWidth,
    padding: spacingSize / 2,
    paddingLeft: isFirstColumn && 0,
    paddingRight: isLastColumn && 0,
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
