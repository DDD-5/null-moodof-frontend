import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import {
  Intro,
  PhotoStorage,
  PhotoBoard,
  TrashCan,
  NotFound,
} from './pages';
import { Navigation, Header } from './components';
import { HEADER_TYPE } from './constants';

const AppFrame = ({ children, headerType }) => {
  const globalWrapStyle = css({
    paddingTop: 56,
    paddingLeft: 280,
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

const Router = () => (
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
      <AppFrame headerType={HEADER_TYPE.TRASH}>
        <TrashCan />
      </AppFrame>
    </Route>
    <Route exact path="/">
      <AppFrame headerType={HEADER_TYPE.STORAGE}>
        <PhotoStorage />
      </AppFrame>
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
