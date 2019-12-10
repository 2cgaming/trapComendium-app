import React from 'react';
import style from 'styled-components';
import {NavLink} from 'react-router-dom';
import {NavButton} from '../Templates/NavButton.jsx';

export const Sidebar = () => (
  <Nav id="sidebar" className="col">
    <Button to={'/build'} activeClassName="selected">Build New Trap</Button>
    <Button to={'/mytraps'} activeClassName="selected">My Traps</Button>
  </Nav>
);

const Button = style(NavButton)`
  margin: 1rem auto 0;
`;

const Nav = style.nav`
  min-width: 14rem;
  width: 25vw;
  max-width: 30rem;
  padding: 15px 1rem;
  background-color: var(--sidebar-color);
`;