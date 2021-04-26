import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../../components';

const PhotoBoard = () => {
  const { boardId } = useParams();

  return (
    <>
      <Navigation />
      <div>PhotoBoard {boardId}</div>
    </>
  );
};

export default PhotoBoard;
