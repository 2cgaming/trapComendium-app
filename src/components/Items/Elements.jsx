import React from 'react';
import style from 'styled-components';
import {BrowserRouter as Link} from 'react-router-dom';

const Div = style.div`
  padding: 5px;
  margin: 10px;
  background: white;
  border: 3px solid var(--primary-color);
  border-radius: 5px;
  font: var(--fonts);
  text-align: center;
  h3 {
    font-size: 1.2em;
    font-weight: bold;
  }
  p {
    font-size: 0.9em
  }
`;

const HoverDiv = style.div`
  &:hover {
    cursor: pointer;
  }
`;

const NoUnderLink = style(Link)`
  text-decoration: none;
`;

export {
  Div,
  HoverDiv,
  NoUnderLink,
}