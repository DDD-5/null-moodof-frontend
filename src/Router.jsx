import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { css } from '@emotion/react';
import { useDispatch } from 'react-redux';

import {
  Intro,
  PhotoStorage,
  PhotoBoard,
  TrashStorage,
  NotFound,
} from './pages';
import { Navigation, Header } from './components';

import { action as userActions } from './store/user/slices';
import { HEADER_TYPE } from './constants';

const AppFrame = ({ children, headerType }) => {
  const globalWrapStyle = css({
    paddingTop: 56,
    paddingLeft: 240,
  });

  return (
    <>
      <Navigation />
      <Header headerType={headerType} />
      <div css={globalWrapStyle}>
        {children}
      </div>
    </>
  );
};

const Router = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // 토큰 제어
  useEffect(() => {
    const localToken = window.localStorage.getItem('token');

    if (localToken) {
      dispatch(userActions.setToken(localToken));
    } else {
      const params = new URLSearchParams(location.search);
      const tokenParam = params.get('token');

      if (tokenParam) {
        window.localStorage.setItem('token', tokenParam);
        dispatch(userActions.setToken(tokenParam));
        history.replace('/');
      } else {
        window.location.href = (`https://www.moodof.net/oauth2/authorize/google?redirect_uri=${window.location.href}`);
      }
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/intro">
        <Intro />
      </Route>
      <Route exact path="/board/:boardId">
        <AppFrame headerType={HEADER_TYPE.BOARD}>
          <PhotoBoard />
        </AppFrame>
      </Route>
      <Route exact path="/trash">
        <AppFrame headerType={HEADER_TYPE.TRASH_STORAGE}>
          <TrashStorage />
        </AppFrame>
      </Route>
      <Route exact path="/">
        <AppFrame headerType={HEADER_TYPE.PHOTO_STORAGE}>
          <PhotoStorage />
        </AppFrame>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Router;
