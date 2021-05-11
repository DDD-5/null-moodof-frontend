import React from 'react';
import { css } from '@emotion/react';
import Photo from './Photo';

const photoStorage = css({
  display: 'flex',
  padding: 50,
  flexWrap: 'wrap',
});

const PhotoStorage = () => (
  <div css={photoStorage}>
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
    <Photo />
  </div>
);

export default PhotoStorage;
