import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>
    <Link to="/">Storage</Link>
    {' '}
    <Link to="/board/123">Board 123</Link>
    {' '}
    <Link to="/intro">Intro</Link>
  </div>
);

export default Navigation;
