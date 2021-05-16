import React from 'react';
import { css } from '@emotion/react';
import { PhotoThumbnail } from '../../components';

const trashStorageStyle = css({
  display: 'flex',
  padding: 50,
  flexWrap: 'wrap',
});

const IMG_SRC = 'https://seoulhype.files.wordpress.com/2020/05/iu_full.jpg?w=1500&h=768&crop=1';
const IMG_ALT = 'IU is Love.';
const dummayArray = Array(10).fill(null);

const TrashStorage = () => (
  <div css={trashStorageStyle}>
    {dummayArray.map((img, index) => (
      <PhotoThumbnail
        key={index}
        imgSrc={IMG_SRC}
        imgAlt={IMG_ALT}
      />
    ))}

  </div>
);

export default TrashStorage;
