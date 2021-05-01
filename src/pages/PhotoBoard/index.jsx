import React from 'react';
import { useParams } from 'react-router-dom';

const PhotoBoard = () => {
  const { boardId } = useParams();

  return (
    <div>PhotoBoard {boardId}</div>
  );
};

export default PhotoBoard;
