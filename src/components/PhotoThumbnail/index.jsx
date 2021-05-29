import React, { useRef, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';

const PhotoThumbnail = ({
  id,
  imgSrc,
  imgAlt,
  isChecked = false,
  wrapperSize,
  handleClickPhoto = () => {},
  handleClickCheck = () => {},
  handleClickUncheck = () => {},
}) => {
  const {
    columnCount,
    spacingSize,
    isSquareOn,
  } = useSelector((state) => state.photoStorage);

  const wrapperRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const loadImage = (src) => new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = src;
      loadImg.onload = ({ path }) => resolve({
        width: path[0].width,
        height: path[0].height,
      });
      loadImg.onerror = (err) => reject(err);
    });

    loadImage(imgSrc).then(({ width, height }) => {
      setImageSize({ width, height });
      setIsImageLoaded(true);
    });
  }, []);

  const isImageWidthLonger = (imageSize.width <= imageSize.height);
  const imageWidth = isImageWidthLonger ? isSquareOn ? 'auto' : '100%' : isSquareOn ? '100%' : 'auto';
  const imageHeight = imageWidth === 'auto' ? '100%' : 'auto';

  return (
    isImageLoaded ? (
      <div
        css={photoWrapperStyle(isChecked, wrapperSize, columnCount, spacingSize)}
        onClick={() => handleClickPhoto(id)}
        ref={wrapperRef}
      >
        <div css={photoStyle}>
          <div css={photoCenteredStyle}>
            <img
              css={photoImgStyle(imageWidth, imageHeight)}
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
        </div>
        {!isSquareOn && (
        <div className="check-button" css={checkButtonStyle(isChecked)} onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={isChecked ? handleClickUncheck : handleClickCheck}
          />
        </div>
        )}
      </div>
    ) : (
      <div css={skeletonStyle(wrapperSize, columnCount, spacingSize)} />
    )
  );
};

const photoWrapperStyle = (isChecked, wrapperSize, columnCount, spacingSize) => css({
  position: 'relative',
  outline: isChecked ? '2px solid #2F80ED' : '',
  cursor: 'pointer',
  width: wrapperSize,
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

const photoImgStyle = (imageWidth, imageHeight) => css({
  width: imageWidth,
  height: imageHeight,
  transform: 'translate(-50%, -50%)',
});

const skeletonStyle = (wrapperSize, columnCount, spacingSize) => css({
  width: wrapperSize,
  height: wrapperSize,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  margin: `0 ${spacingSize}px ${spacingSize}px 0`,
  [`&:nth-of-type(${columnCount}n)`]: {
    marginRight: 0,
  },
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

export default PhotoThumbnail;
