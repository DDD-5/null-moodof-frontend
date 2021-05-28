import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';

import { MasonryPhotoThumbnail } from '../../components';

const COLUMN_SIZE = 3;
const COLUMN_WIDTH = 250;
const spacingSize = 10;

const photoBoardStyle = css({});

const imagesStyle = css({});

const PhotoBoard = () => {
  const { boardId } = useParams();
  const [photos, setPhotos] = useState([
    {
      src: 'https://images.unsplash.com/photo-1552633832-4f5a1b110980?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ',
    },
    {
      src: 'https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ"',
    },
    {
      src: 'https://images.unsplash.com/photo-1552644867-3c98a63f38eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ',
    },
    {
      src: 'https://images.unsplash.com/photo-1552620543-31d952829801?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ',
    },
    {
      src: 'https://images.unsplash.com/photo-1552602989-715150494024?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ',
    },
  ]);
  const [isAllPhotoLoaded, setIsAllPhotoLoaded] = useState(false);
  const [photoPositions, setPhotoPositions] = useState([]);

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

        photoStack[minIndex] += (tempPhotos[i].clientHeight + spacingSize);
        tempPhotoPositions[i] = { x, y };
      }

      setPhotoPositions(tempPhotoPositions);
    }
  }, [isAllPhotoLoaded]);

  return (
    <div css={photoBoardStyle}>
      {isAllPhotoLoaded ? (
        <div css={imagesStyle}>
          {photos.map((photo, index) => (
            <MasonryPhotoThumbnail
              key={index}
              id={index}
              src={photo.src}
              x={photoPositions?.[index]?.x}
              y={photoPositions?.[index]?.y}
              columnWidth={COLUMN_WIDTH}
              spacingSize={spacingSize}
            />
          ))}
        </div>
      ) : (
        <span>Loading</span>
      ) }
    </div>
  );
};

export default PhotoBoard;
