import React from 'react';
import { css } from '@emotion/react';

const menuStyle = css({
  width: 135,
  height: 105,
  backgroundColor: 'white',
  border: '0.5px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
  borderRadius: 4,
});

const CategoryMenu = () => (
  <div css={menuStyle}>
    CategoryMenu
  </div>
);

export default CategoryMenu;
