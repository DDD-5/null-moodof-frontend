import React from 'react';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';

import { action as appActions } from '../../../store/app/slices';
import { MENU_TYPE } from '../../../constants';
import { Sort, Filter, Add } from '../../../assets/icons/16';

const iconBlockStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  marginRight: 8,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  '&:last-child': {
    marginRight: 0,
  },
});

const WrappedIcon = ({ Icon, handleClick }) => (
  <div css={iconBlockStyle} onClick={handleClick}>
    <Icon />
  </div>
);

const DefaultMode = () => {
  const dispatch = useDispatch();

  const handleClickSort = (e) => {
    e.preventDefault();

    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.HEADER.PHOTO_STORAGE.SORT,
      menuProps: {
        pageX: e.pageX,
        pageY: e.pageY,
      },
    }));
  };

  const handleClickFilter = (e) => {
    e.preventDefault();

    dispatch(appActions.openMenu({
      menuType: MENU_TYPE.HEADER.PHOTO_STORAGE.TAG_FILTER,
      menuProps: {
        pageX: e.pageX,
        pageY: e.pageY,
      },
    }));
  };

  return (
    <>
      <WrappedIcon Icon={Sort} handleClick={handleClickSort} />
      <WrappedIcon Icon={Filter} handleClick={handleClickFilter} />
      <WrappedIcon Icon={Add} />
    </>
  );
};

export default DefaultMode;
