import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from './account.svg';

const Navigation = () => (
  <nav className="nav-bar">
    <Link className="nav-title" to="/">Bookstore CMS</Link>
    <ul className="nav-links">
      <li>
        <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" activeClassName="active" to="/categories">Categories</NavLink>
      </li>
    </ul>
    <button className="avatar-btn" type="button">
      <img src={avatar} className="avatar" alt="Account avatar" />
    </button>
  </nav>
);

export default Navigation;
