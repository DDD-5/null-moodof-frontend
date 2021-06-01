import React, { memo, useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';

import { action as userActions } from '../../../store/auth/slices';
import { APP } from '../../../constants';
import { Logout, ChevronUp, ChevronDown } from '../../../assets/icons/16';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading: { user: isUserLoading } } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(userActions.getUserRequest());
  }, []);

  const handleProfileToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickSignout = () => {
    dispatch(userActions.logout());
  };

  const {
    profileUrl,
    nickname,
    email,
  } = user || {};

  return (
    <div css={profileStyle(isOpen)}>
      {(!!Object.keys(user).length && !isUserLoading) && (
        <>
          {isOpen && (
          <div css={expandBlockStyle} onClick={handleClickSignout}>
            <div css={logoutStyle}>
              <Logout css={{ marginRight: 8 }} />
              <span>로그아웃</span>
            </div>
          </div>
          )}

          <div css={defaultBlockStyle}>
            <img css={imageStyle} src={profileUrl} alt="profile" />
            <div css={nameBlockStyle}>
              <span>{nickname}</span>
              <span>{email}</span>
            </div>
            {isOpen
              ? <ChevronDown css={chevronStyle} onClick={handleProfileToggle} />
              : <ChevronUp css={chevronStyle} onClick={handleProfileToggle} />}
          </div>
        </>
      )}
    </div>
  );
};

const profileStyle = (isOpen) => css({
  width: APP.navigationWidth,
  height: isOpen ? 120 : 65,
  position: 'fixed',
  bottom: 0,
  backgroundColor: '#FAFAFA',
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  borderRight: '1px solid rgba(0, 0, 0, 0.1)',
});

const imageStyle = css({
  width: 40,
  height: 40,
  color: 'white',
  borderRadius: '100%',
});

const nameBlockStyle = css({
  paddingLeft: 12,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: 140,
  '& span': {
    width: 140,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:nth-of-type(1)': {
      fontSize: 14,
    },
    '&:nth-of-type(2)': {
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.4);',
    },
  },
});

const logoutStyle = css({
  width: '100%',
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  color: '#616161',
});

const chevronStyle = css({
  position: 'absolute',
  right: 15,
  cursor: 'pointer',
});

const defaultBlockStyle = css({
  height: 65,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '0 15px 0 15px',
});

const expandBlockStyle = css({
  height: 55,
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px 0 24px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
});

export default memo(Profile);
