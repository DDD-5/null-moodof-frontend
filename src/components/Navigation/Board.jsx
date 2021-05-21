import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { css } from '@emotion/react';
import { useDrag, useDrop } from 'react-dnd';
import { Ellipsis } from '../../assets/icons/16';

const boardNameStyle = (isDragging, isOver, isSelected) => css({
  height: 40,
  fontSize: 14,
  padding: '0 12px 0 32px',
  marginBottom: 5,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  color: 'inherit',
  textDecoration: 'none',
  backgroundColor: (isOver || isDragging)
    ? 'rgba(240, 246, 255, 1)'
    : isSelected && '#EEEEEE',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: (isOver || isDragging)
      ? 'rgba(240, 246, 255, 1)'
      : isSelected
        ? '#EEEEEE'
        : '#F5F5F5',
    '& .hover-buttons': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  '&:last-child': {
    marginBottom: 0,
  },
});

const boardHoverButtons = css({
  display: 'none',
  alignItems: 'center',
  '& svg': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
});

const emptyStyle = (isOver) => css({
  height: 40,
  backgroundColor: isOver && 'rgba(240, 246, 255, 1)',
});

const hoverIconBlockStyle = (isSelected) => css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 24,
  height: 24,
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: isSelected
      ? 'rgba(0, 0, 0, 0.1)'
      : 'rgba(0, 0, 0, 0.05)',
  },
});

const WrappedHoverIcon = ({ Icon, handleClick, isSelected }) => (
  <div css={hoverIconBlockStyle(isSelected)} onClick={handleClick}>
    <Icon />
  </div>
);

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
  const isSelected = matchBoardPath?.isExact;

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
          css={boardNameStyle(isDragging, isOver, isSelected)}
          ref={(node) => dragRef(dropRef(node))}
        >
          <span>{name}</span>
          <div className="hover-buttons" css={boardHoverButtons}>
            <WrappedHoverIcon Icon={Ellipsis} isSelected={isSelected} />
          </div>
        </Link>
      )
  );
};

export default Board;
