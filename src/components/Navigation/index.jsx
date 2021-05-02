import React, { useState } from 'react';
import { css } from '@emotion/react';
import {
  Logo, Fold, Storage, TrashCan,
} from '../../assets/icons';
import Category from './Category';
import Profile from './Profile';

const navigationStyle = css({
  width: 280,
  height: '100vh',
  position: 'fixed',
  top: 0,
  backgroundColor: '#FAFAFA',
  borderRight: '1px solid rgba(0, 0, 0, 0.1)',
});

const titleStyle = css({
  height: 56,
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  padding: '0 16px 0 19px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const menuStyle = css({
  overflow: 'scroll',
  height: 'calc(100% - 56px)',
  padding: '24px 16px 104px 16px',
});

const storageStyle = css({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  margin: '0 8px 7.5px 8px',
  fontSize: 14,
  cursor: 'pointer',
});

const trashCanStyle = css({
  height: 40,
  display: 'flex',
  alignItems: 'center',
  margin: '7.5px 8px 0 8px',
  fontSize: 14,
  cursor: 'pointer',
});

const Navigation = () => {
  const [categoryData, setCategoryData] = useState([
    {
      id: 'a',
      name: '프로젝트a',
      boardData: [
        {
          id: 'a',
          categoryId: 'a',
          name: '보드a',
        },
        {
          id: 'b',
          categoryId: 'a',
          name: '보드b',
        },
      ],
    },
    {
      id: 'b',
      name: '프로젝트b',
      boardData: [
        {
          id: 'c',
          categoryId: 'b',
          name: '보드c',
        },
        {
          id: 'd',
          categoryId: 'b',
          name: '보드d',
        },
      ],
    },
    {
      id: 'c',
      name: '프로젝트c',
      boardData: [
        {
          id: 'e',
          categoryId: 'c',
          name: '보드e',
        },
        {
          id: 'f',
          categoryId: 'c',
          name: '보드f',
        },
      ],
    },
  ]);

  const findCategory = (data, id) => data.find((category) => category.id === id);
  const findCategoryId = (data, id) => data.findIndex((category) => category.id === id);

  const moveCategory = (id, toId) => {
    setCategoryData((prevState) => {
      const targetCategoryId = findCategoryId(prevState, id);
      const targetToCategoryId = findCategoryId(prevState, toId);

      const newCategoryData = [...prevState];
      const movingCategory = newCategoryData.splice(targetCategoryId, 1)[0];
      newCategoryData.splice(targetToCategoryId, 0, movingCategory);
      return newCategoryData;
    });
  };

  const findBoardId = (data, categoryId, boardId) => {
    const targetCategory = findCategory(data, categoryId);
    return targetCategory.boardData.findIndex((board) => board.id === boardId);
  };

  const moveBoard = (categoryId, id, toCategoryId, toId) => {
    setCategoryData((prevState) => {
      const targetCategoryId = findCategoryId(prevState, categoryId);
      const targetToCategoryId = findCategoryId(prevState, toCategoryId);
      const targetBoardId = findBoardId(prevState, categoryId, id);
      const targetToBoardId = toId ? findBoardId(prevState, toCategoryId, toId) : 0;

      const newCategoryData = [...prevState];
      const movingBoard = newCategoryData[targetCategoryId].boardData.splice(targetBoardId, 1)[0];
      movingBoard.categoryId = toCategoryId;
      newCategoryData[targetToCategoryId].boardData.splice(targetToBoardId, 0, movingBoard);
      return newCategoryData;
    });
  };

  return (
    <nav css={navigationStyle}>
      <div css={titleStyle}>
        <Logo />
        <Fold css={{ cursor: 'pointer' }} />
      </div>

      <div css={menuStyle}>
        <div css={storageStyle}>
          <Storage css={{ marginRight: '6px' }} />
          <span>이미지 보관함</span>
        </div>
        <div>
          {categoryData.map((category) => (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              boardData={category.boardData}
              moveCategory={moveCategory}
              moveBoard={moveBoard}
            />
          ))}
        </div>
        <div css={trashCanStyle}>
          <TrashCan css={{ marginRight: '6px' }} />
          <span>휴지통</span>
        </div>
      </div>

      <Profile />
    </nav>
  );
};

export default Navigation;
