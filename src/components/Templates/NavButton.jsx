import style from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavButton = style(NavLink)`
  width: 12rem;
  padding: 10px;

  background: white;
  border: 3px solid black;
  border-radius: 5px;

  color: black;
  font-family: var(--fonts);
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;

  transition: 0.3s;

  &.selected {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  &:hover {
    background-color: var(--primary-color-hover);
    border-color: black;
    color: white;
    cursor: pointer;
  }`;