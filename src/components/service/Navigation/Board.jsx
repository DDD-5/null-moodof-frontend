import React, {
  memo, useState, useRef, useEffect,
} from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';

import { action as appActions } from '../../../store/app/slices';
import { action as navigationActions } from '../../../store/navigation/slices';
import { MENU_TYPE } from '../../../constants';
import { Ellipsis } from '../../../assets/icons/16';

const WrappedIcon = ({ Icon, handleClick, isSelected }) => (
  <div css={wrappedIconStyle(isSelected)} onClick={handleClick}>
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
  const dispatch = useDispatch();
  const { renameBoardInput } = useSelector((state) => state.navigation);
  const isRenameBoardInputOpen = renameBoardInput.isOpen
    && renameBoardInput.categoryId === categoryId
    && renameBoardInput.boardId === id;

  const [renameBoardInputValue, setRenameBoardInputValue] = useState(name);
  const renameBoardInputRef = useRef(null);

  useEffect(() => {
    if (renameBoardInputRef.current) {
      renameBoardInputRef.current.focus();
    }
  }, [isRenameBoardInputOpen]);

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

  const handleClickMenu = (e) => {
    e.preventDefault();

    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.NAVIGATION.BOARD,
      menuProps: {
        clientX: e.clientX,
        clientY: e.clientY,
        categoryId,
        boardId: id,
      },
    }));
  };

  const handleBlurRenameBoard = () => {
    dispatch(navigationActions.setRenameBoardInput({ isOpen: false, categoryId, boardId: id }));
    setRenameBoardInputValue(name);
  };

  const handleChangeRenameBoard = (e) => {
    setRenameBoardInputValue(e.target.value);
  };

  const handleKeyPressRenameBoard = (e) => {
    if (e.key === 'Enter') {
      if (name === renameBoardInputValue) {
        dispatch(navigationActions.setRenameBoardInput({ isOpen: false, categoryId, boardId: id }));
      } else if (renameBoardInputValue) {
        dispatch(navigationActions.setRenameBoardInput({ isOpen: false, categoryId, boardId: id }));
        dispatch(navigationActions.updateBoardNameRequest(
          { boardId: id, name: renameBoardInputValue },
        ));
      }
    }
  };

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
        isRenameBoardInputOpen
          ? (
            <div css={renameBoardStyle}>
              <input
                placeholder={name}
                maxLength="20"
                value={renameBoardInputValue}
                ref={renameBoardInputRef}
                onChange={handleChangeRenameBoard}
                onBlur={handleBlurRenameBoard}
                onKeyPress={handleKeyPressRenameBoard}
              />
            </div>
          )
          : (
            <Link
              to={`/board/${id}`}
              css={boardNameStyle(isDragging, isOver, isSelected)}
              ref={(node) => dragRef(dropRef(node))}
            >
              <span className="board-name">{name}</span>
              <div className="hover-buttons" css={boardHoverButtons}>
                <WrappedIcon
                  Icon={Ellipsis}
                  isSelected={isSelected}
                  handleClick={handleClickMenu}
                />
              </div>
            </Link>
          )
      )
  );
};

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
  opacity: isDragging && 0.5,
  backgroundColor: (isOver && !isDragging)
    ? 'rgba(240, 246, 255, 1)'
    : isSelected && '#EEEEEE',
  borderRadius: 4,
  '&:hover': {
    backgroundColor: (isOver && !isDragging)
      ? 'rgba(240, 246, 255, 1)'
      : isSelected
        ? '#EEEEEE'
        : '#F5F5F5',
    '& .hover-buttons': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .board-name': {
      width: 140,
    },
  },
  '&:last-child': {
    marginBottom: 0,
  },
  '& span': {
    width: 165,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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

const wrappedIconStyle = (isSelected) => css({
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

const renameBoardStyle = css({
  display: 'flex',
  alignItems: 'center',
  height: 40,
  padding: '0 12px 0 24px',
  marginBottom: 5,
  '&:last-child': {
    marginBottom: 0,
  },
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

export default memo(Board);
