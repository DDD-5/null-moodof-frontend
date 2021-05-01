import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { css } from '@emotion/react';
import {
  Intro,
  PhotoStorage,
  PhotoBoard,
  NotFound,
} from './pages';
import { Navigation } from './components';

const WrappedComponent = ({ component }) => {
  const globalWrapStyle = css({
    paddingLeft: '280px',
  });

  return (
    <div css={globalWrapStyle}>
      {component}
    </div>
  );
};

const Router = () => (
  <Switch>
    <Route exact path="/intro">
      <Intro />
    </Route>
    <Route exact path="/board/:boardId">
      <Navigation />
      <WrappedComponent component={<PhotoBoard />} />
    </Route>
    <Route exact path="/">
      <Navigation />
      <WrappedComponent component={<PhotoStorage />} />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default Router;
