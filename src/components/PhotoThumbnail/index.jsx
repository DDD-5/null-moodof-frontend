import React, { useRef, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

const photoWrapperStyle = (isChecked, imagePercent, columnCount, spacingSize) => css({
  position: 'relative',
  outline: isChecked ? '2px solid #2F80ED' : '',
  cursor: 'pointer',
  width: `${imagePercent}%`,
  margin: `0 ${spacingSize}px ${spacingSize}px 0`,
  [`&:nth-of-type(${columnCount}n)`]: {
    marginRight: 0,
  },
  '&:hover': {
    '& .check-button': {
      display: 'block',
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

const photoImgStyle = (imageWidth, imageHeight, wrapperWidth, wrapperHeight) => css({
  width: imageWidth <= imageHeight ? wrapperWidth : 'auto',
  height: imageWidth > imageHeight ? wrapperHeight : 'auto',
  transform: 'translate(-50%, -50%)',
});

const checkButtonStyle = (isChecked) => css({
  display: isChecked ? 'block' : 'none',
  position: 'absolute',
  top: 5,
  left: 5,
  opacity: isChecked ? 1 : 0.5,
  '& input': {
    width: 20,
    height: 20,
  },
});

const PhotoThumbnail = ({
  id,
  imgSrc,
  imgAlt,
  isChecked = false,
  imagePercent,
  handleClickPhoto = () => {},
  handleClickCheck = () => {},
  handleClickUncheck = () => {},
}) => {
  const {
    columnCount,
    spacingSize,
  } = useSelector((state) => state.photoStorage);

  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  useEffect(() => {
    setWrapperWidth(wrapperRef.current.clientWidth);
    setWrapperHeight(wrapperRef.current.clientHeight);
    setImageWidth(imageRef.current.width);
    setImageHeight(imageRef.current.height);
    return () => {
      setIsImageLoaded(false);
    };
  }, [isImageLoaded]);

  return (
    <div
      css={photoWrapperStyle(isChecked, imagePercent, columnCount, spacingSize)}
      onClick={() => handleClickPhoto(id)}
      ref={wrapperRef}
    >
      <div css={photoStyle}>
        <div css={photoCenteredStyle}>
          <img
            css={photoImgStyle(imageWidth, imageHeight, wrapperWidth, wrapperHeight)}
            onLoad={(e) => {
              setIsImageLoaded(true);
            }}
            src={imgSrc}
            alt={imgAlt}
            ref={imageRef}
          />
        </div>
      </div>

      <div className="check-button" css={checkButtonStyle(isChecked)} onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={isChecked ? handleClickUncheck : handleClickCheck}
        />
      </div>
    </div>
  );
};

export default PhotoThumbnail;
