import React, { useState, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as Logo } from '../logo.svg';
import { NAV_LINKS } from '../constants';
import './Nav.css';

const NavLinks = ({ onClick }) => (
  <ul className="nav-links">
    {NAV_LINKS.map((link) => (
      <li key={link.title}>
        <NavLink
          exact={link.href === '/'}
          activeClassName="active"
          to={link.href}
          onClick={onClick}
        >
          {link.title}
        </NavLink>
      </li>
    ))}
  </ul>
);

const Nav = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = useCallback(() => setIsActive(!isActive), [
    isActive,
    setIsActive,
  ]);
  return (
    <div id="root" className={classNames({ 'menu-open': isActive })}>
      <nav id="mobile-nav">
        <NavLinks onClick={handleClick} />
      </nav>
      <nav id="nav">
        <Link id="logo" to="/">
          <Logo />
        </Link>
        <NavLinks />
        <button
          id="mobile-nav-button"
          className={classNames('hamburger', { 'is-active': isActive })}
          onClick={handleClick}
        >
          <span>toggle menu</span>
        </button>
      </nav>
      {children}
    </div>
  );
};

export default Nav;
