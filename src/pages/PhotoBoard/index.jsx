import React, { memo, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';

import { MasonryPhotoThumbnail } from '../../components';

const COLUMN_SIZE = 4;
const COLUMN_WIDTH = 250;
const spacingSize = 6;

const PhotoBoard = () => {
  const { boardId } = useParams();
  const [photos, setPhotos] = useState([
    {
      src: 'https://images.unsplash.com/photo-1568377210220-151e1d7f42c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1502920873987-ac48e660a95d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1562663464-36b958487cd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1596079890687-58c51d24889a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      src: 'https://images.unsplash.com/photo-1609081144289-eacc3108cd03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      src: 'https://images.unsplash.com/photo-1540551079-b1236c0cd8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ]);
  const [isAllPhotoLoaded, setIsAllPhotoLoaded] = useState(false);
  const [photoPositions, setPhotoPositions] = useState([]);
  const [photosHeight, setPhotosHeight] = useState(0);

  useEffect(() => {
    const loadImage = (src) => new Promise((resolve, reject) => {
      const loadImg = new Image();
      loadImg.src = src;
      loadImg.onload = () => resolve(src);
      loadImg.onerror = (err) => reject(err);
    });

    Promise.all(photos.map((p) => loadImage(p.src)))
      .then(() => setIsAllPhotoLoaded(true))
      .catch((error) => console.log('Image not loaded.', error));
  }, []);

  useEffect(() => {
    if (isAllPhotoLoaded) {
      const photoStack = Array(COLUMN_SIZE).fill(0);
      const tempPhotos = window.document.querySelectorAll('.masonry-photo');
      const tempPhotoPositions = [];

      for (let i = 0; i < tempPhotos.length; i += 1) {
        const minIndex = photoStack.indexOf(Math.min.apply(0, photoStack));
        const x = COLUMN_WIDTH * minIndex;
        const y = photoStack[minIndex];
        const isFirstColumn = minIndex === 0;
        const isLastColumn = minIndex === photoStack.length - 1;

        photoStack[minIndex] += (tempPhotos[i].clientHeight + spacingSize);
        tempPhotoPositions[i] = {
          x: isFirstColumn ? x : x + (minIndex * spacingSize),
          y,
          isFirstColumn,
          isLastColumn,
        };

        if (i === photos.length - 1) {
          setPhotosHeight(Math.max.apply(0, photoStack));
        }
      }

      setPhotoPositions(tempPhotoPositions);
    }
  }, [isAllPhotoLoaded]);

  return (
    <div css={photoBoardStyle}>
      <div css={titleWrapperStyle}>
        <h2>인테리어</h2>
        <span>{photos.length}장의 이미지</span>
      </div>

      {isAllPhotoLoaded ? (
        <div css={imageListStyle(photosHeight)}>
          {photos.map((photo, index) => (
            <MasonryPhotoThumbnail
              key={index}
              src={photo.src}
              x={photoPositions?.[index]?.x}
              y={photoPositions?.[index]?.y}
              columnWidth={COLUMN_WIDTH}
            />
          ))}
        </div>
      ) : (
        <span>Loading</span>
      ) }
    </div>
  );
};

const photoBoardStyle = css({
  padding: '0 18px 40px 18px',
  userSelect: 'none',
});

const titleWrapperStyle = css({
  display: 'flex',
  alignItems: 'baseline',
  padding: '14px 0',
  '& h2': {
    fontSize: 18,
    fontWeight: 700,
    marginRight: 8,
  },
  '& span': {
    color: 'rgba(0, 0, 0, 0.4)',
    fontSize: 14,
    fontWeight: 500,
  },
});

const imageListStyle = (photosHeight) => css({
  height: photosHeight,
  position: 'relative',
});

export default memo(PhotoBoard);
