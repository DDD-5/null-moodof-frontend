import React from 'react';
import { css } from '@emotion/react';

import { AddCategory, Edit, TrashCan } from '../../../../assets/icons/16';

const CategoryMenu = () => (
  <div css={menuStyle}>
    <div css={menuItemStyle}>
      <AddCategory />
      <span>새 카테고리</span>
    </div>
    <div css={menuItemStyle}>
      <Edit />
      <span>이름 변경</span>
    </div>
    <div css={dividerStyle} />
    <div css={menuItemStyle}>
      <TrashCan />
      <span>삭제</span>
    </div>
  </div>
);

const menuStyle = css({
  width: 135,
  height: 105,
  backgroundColor: 'white',
  border: '0.5px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
  borderRadius: 4,
  padding: 8,
  fontSize: 12,
});

const menuItemStyle = css({
  width: 120,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  marginBottom: 5.5,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#F5F5F5;',
    borderRadius: 4,
  },
  '&:last-child': {
    marginBottom: 0,
  },
  '& svg': {
    marginLeft: 6,
    marginRight: 8,
  },
});

const dividerStyle = css({
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  marginBottom: 5.5,
});

export default CategoryMenu;
