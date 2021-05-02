import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { css } from '@emotion/react';
import { useDrag, useDrop } from 'react-dnd';

const boardNameStyle = (isDragging, isOver, isMatchPath) => css({
  height: 40,
  fontSize: 14,
  paddingLeft: 17,
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  opacity: isDragging && 0.5,
  outline: isOver && '1px solid grey',
  color: 'inherit',
  textDecoration: 'none',
  backgroundColor: isMatchPath && '#F5F5F5',
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  '&::before': {
    content: "''",
    width: 6,
    height: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    marginRight: 15,
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

const emptyStyle = (isOver) => css({
  height: 40,
  outline: isOver && '1px solid grey',
});

const Board = ({
  id,
  categoryId,
  name,
  moveBoard,
  isEmpty,
}) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'board',
    item: { id, categoryId },
    canDrag: !isEmpty,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'board',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop({ id: drraggedId, categoryId: draggedProejctId }) {
      moveBoard(draggedProejctId, drraggedId, categoryId, id);
    },
  }));

  const matchBoardPath = useRouteMatch(`/board/${id}`);

  return (
    isEmpty
      ? (
        <div
          css={emptyStyle(isOver)}
          ref={(node) => dragRef(dropRef(node))}
        />
      ) : (
        <Link
          to={`/board/${id}`}
          css={boardNameStyle(isDragging, isOver, matchBoardPath?.isExact)}
          ref={(node) => dragRef(dropRef(node))}
        >{name}
        </Link>
      )
  );
};

export default Board;
