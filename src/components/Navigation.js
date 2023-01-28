import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/categories">
      Categories
    </Link>
  </nav>
);

export default Navigation;
