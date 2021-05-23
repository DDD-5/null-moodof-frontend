import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import { GlobalModalContainer, GlobalMenuContainer } from './components';

const App = () => (
  <BrowserRouter>
    <Router />
    <GlobalModalContainer />
    <GlobalMenuContainer />
  </BrowserRouter>
);

export default App;
