import React from 'react';
import { css } from '@emotion/react';
import { useDrag, useDrop } from 'react-dnd';

const boardNameStyle = (isDragging, isOver) => css({
  height: 40,
  fontSize: 14,
  paddingLeft: 17,
  marginBottom: 4,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  opacity: isDragging && 0.5,
  outline: isOver && '1px solid grey',
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

  return (
    isEmpty
      ? (
        <li
          css={emptyStyle(isOver)}
          ref={(node) => dragRef(dropRef(node))}
        />
      ) : (
        <li
          css={boardNameStyle(isDragging, isOver, isEmpty)}
          ref={(node) => dragRef(dropRef(node))}
        >
          {name}
        </li>
      )
  );
};

export default Board;
