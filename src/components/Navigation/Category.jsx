import React, {
  memo, useState, useRef, useEffect,
} from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import Board from './Board';

import { action as appActions } from '../../store/app/slices';
import { action as navigationActions } from '../../store/navigation/slices';
import { MENU_TYPE } from '../../constants';
import { Ellipsis, ChevronUp, ChevronDown } from '../../assets/icons/16';
import { Add } from '../../assets/icons/12';

const categoryStyle = (isDragging, isOver) => css({
  padding: '10px 0 10px 0',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  opacity: isDragging && 0.5,
  backgroundColor: (isOver && !isDragging) && 'rgba(240, 246, 255, 1)',
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
    '& .category-name': {
      width: 110,
    },
  },
});

const categoryNameStyle = css({
  display: 'flex',
  alignItems: 'center',
  color: '#A2A9B0',
  fontSize: 12,
  '& span': {
    width: 165,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
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

const newBoardStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: 40,
  padding: '0 12px 0 24px',
  '& input': {
    width: 180,
    height: 30,
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    padding: '0 8px',
    '&:focus': {
      border: '1px solid #2F80ED',
      outline: 'none',
    },
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
  boardList,
  moveCategory,
  moveBoard,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [isNewBoardInputOpen, setIsNewBoardInputOpen] = useState(false);
  const [newBoardInputValue, setNewBoardInputValue] = useState('');
  const newBoardInputRef = useRef(null);

  useEffect(() => {
    if (newBoardInputRef.current) {
      newBoardInputRef.current.focus();
    }
  }, [isNewBoardInputOpen]);

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

  const handleClickCreateBoard = () => {
    setIsNewBoardInputOpen(true);
  };

  const handleBlurCreateBoard = () => {
    setIsNewBoardInputOpen(false);
    setNewBoardInputValue('');
  };

  const handleChangeCreateBoard = (e) => {
    setNewBoardInputValue(e.target.value);
  };

  const handleKeyPressCreateBoard = (e) => {
    if (e.key === 'Enter') {
      if (newBoardInputValue) {
        dispatch(navigationActions.createBoardRequest({
          categoryId: id,
          name: newBoardInputValue,
          previousBoardId: boardList?.[boardList.length - 1]?.id || 0,
        }));
        setIsNewBoardInputOpen(false);
        setNewBoardInputValue('');
      }
    }
  };

  const handleClickMenu = (e) => {
    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.NAVIGATION.CATEGORY,
      menuProps: {
        clientX: e.clientX,
        clientY: e.clientY,
      },
    }));
  };

  return (
    <div css={categoryStyle(isDragging, isOver)} ref={(node) => dragRef(dropRef(node))}>
      <div css={categoryNameWrapperStyle}>
        <div css={categoryNameStyle}>
          {isOpen
            ? <ChevronUp color="rgba(0, 0, 0, 0.4)" css={{ marginRight: 8, cursor: 'pointer' }} onClick={handleToggleOpen} />
            : <ChevronDown color="rgba(0, 0, 0, 0.4)" css={{ marginRight: 8, cursor: 'pointer' }} onClick={handleToggleOpen} />}
          <span className="category-name">{name}</span>
        </div>
        <div className="hover-buttons" css={categoryHoverButtons}>
          <WrappedHoverIcon Icon={Add} handleClick={handleClickCreateBoard} />
          <WrappedHoverIcon Icon={Ellipsis} handleClick={handleClickMenu} />
        </div>
      </div>

      {isOpen && (
        <div css={boardListStyle}>
          {boardList.map((board) => (
            <Board
              key={board.id}
              id={board.id}
              categoryId={board.categoryId}
              name={board.name}
              moveBoard={moveBoard}
            />
          ))}
          {isNewBoardInputOpen && (
            <div css={newBoardStyle}>
              <input
                placeholder="새 보드"
                maxLength="20"
                value={newBoardInputValue}
                ref={newBoardInputRef}
                onBlur={handleBlurCreateBoard}
                onChange={handleChangeCreateBoard}
                onKeyPress={handleKeyPressCreateBoard}
              />
            </div>
          )}
          {!boardList.length && !isNewBoardInputOpen && (
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

export default memo(Category);
