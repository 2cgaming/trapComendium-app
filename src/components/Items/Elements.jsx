import React from 'react';
import style from 'styled-components';

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

const Console = style.div`
  width: 80%;
  font-size: 1.2em;
  padding: 20px;
`;

export {
  Div,
  Console,
  HoverDiv,
}