import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import Board from './Board';

import { action as appActions } from '../../store/app/slices';
import { MENU_TYPE } from '../../constants';
import { Ellipsis, ChevronUp, ChevronDown } from '../../assets/icons/16';
import { Add } from '../../assets/icons/12';

const categoryStyle = (isDragging, isOver) => css({
  padding: '10px 0 10px 0',
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
  padding: '0 12px 0 8px',
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
  marginTop: 5,
});

const hoverIconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 24,
  height: 24,
  borderRadius: 4,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
});

const WrappedHoverIcon = ({ Icon, handleClick }) => (
  <div css={hoverIconBlockStyle} onClick={handleClick}>
    <Icon />
  </div>
);

const Category = ({
  id,
  name,
  boardData,
  moveCategory,
  moveBoard,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const handleClickMenu = (e) => {
    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.NAVIGATION.CATEGORY,
      menuProps: {
        pageX: e.pageX,
        pageY: e.pageY,
      },
    }));
  };

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

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={categoryStyle(isDragging, isOver)} ref={(node) => dragRef(dropRef(node))}>
      <div css={categoryNameWrapperStyle}>
        <div css={categoryNameStyle}>
          {isOpen
            ? <ChevronUp color="rgba(0, 0, 0, 0.4)" css={{ marginRight: 8, cursor: 'pointer' }} onClick={handleToggleOpen} />
            : <ChevronDown color="rgba(0, 0, 0, 0.4)" css={{ marginRight: 8, cursor: 'pointer' }} onClick={handleToggleOpen} />}
          <span>{name}</span>
        </div>
        <div className="hover-buttons" css={categoryHoverButtons}>
          <WrappedHoverIcon Icon={Add} />
          <WrappedHoverIcon Icon={Ellipsis} handleClick={handleClickMenu} />
        </div>
      </div>

      {isOpen && (
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
      )}
    </div>
  );
};

export default Category;
