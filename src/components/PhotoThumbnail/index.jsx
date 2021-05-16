import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';

const photoWrapperStyle = css({
  '@media (min-width: 1200px)': {
    width: '18%',
    margin: '0 2.5% 2.5% 0',
    '&:nth-of-type(5n)': {
      marginRight: 0,
    },
  },
  '@media (max-width: 1200px)': {
    width: '22%',
    margin: '0 4% 4% 0',
    '&:nth-of-type(4n)': {
      marginRight: 0,
    },
  },
});

const photoStyle = css({
  position: 'relative',
  paddingTop: '100%',
  overflow: 'hidden',
});

const photoCenteredStyle = css({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transform: 'translate(50%, 50%)',
});

const PhotoThumbnail = ({
  imgSrc,
  imgAlt,
  handleClickPhoto = () => {},
  handleClickCheck = () => {},
  handleClickUncheck = () => {},
}) => {
  // TODO height 받아오는 부분 수정 필요
  const wrapperRef = useRef(null);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const photoImgStyle = css({
    height: `${isImgLoaded ? wrapperRef?.current?.clientHeight : 0}px`,
    transform: 'translate(-50%, -50%)',
  });

  return (
    <div css={photoWrapperStyle} onClick={handleClickPhoto} ref={wrapperRef}>
      <div css={photoStyle}>
        <div css={photoCenteredStyle}>
          <img
            css={photoImgStyle}
            onLoad={() => setIsImgLoaded(true)}
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoThumbnail;
