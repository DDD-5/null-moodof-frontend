import React from 'react';
import { css } from '@emotion/react';
import { useDrag, useDrop } from 'react-dnd';
import { ChevronDown } from '../../assets/icons/18';
import { Ellipsis } from '../../assets/icons/16';
import { Plus } from '../../assets/icons/10';
import Board from './Board';

const categoryStyle = (isDragging, isOver) => css({
  padding: '10.5px 0 16.5px 0',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  opacity: isDragging && 0.5,
  outline: isOver && '1px solid grey',
  '&:last-child': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
});

const categoryNameWrapperStyle = css({
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    '& .hover-buttons': {
      display: 'flex',
      alignItems: 'center',
    },
  },
});

const categoryNameStyle = css({
  display: 'flex',
  alignItems: 'center',
  color: '#A2A9B0',
  fontSize: 12,
});

const categoryHoverButtons = css({
  display: 'none',
  alignItems: 'center',
  '& svg': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
});

const boardListStyle = css({
  marginTop: 4,
});

const Category = ({
  id,
  name,
  boardData,
  moveCategory,
  moveBoard,
}) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'category',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'category',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop({ id: drraggedId }) {
      moveCategory(drraggedId, id);
    },
  }));

  return (
    <div css={categoryStyle(isDragging, isOver)} ref={(node) => dragRef(dropRef(node))}>
      <div css={categoryNameWrapperStyle}>
        <div css={categoryNameStyle}>
          <ChevronDown css={{ marginRight: '2px' }} />
          <span>{name}</span>
        </div>
        <div className="hover-buttons" css={categoryHoverButtons}>
          <Plus />
          <Ellipsis css={{ marginLeft: 15 }} />
        </div>
      </div>
      <div css={boardListStyle}>
        {boardData.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            categoryId={board.categoryId}
            name={board.name}
            moveBoard={moveBoard}
          />
        ))}
        {!boardData.length && (
          <Board
            isEmpty
            categoryId={id}
            moveBoard={moveBoard}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
