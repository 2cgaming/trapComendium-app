import React from 'react';
import style from 'styled-components';

const Button = style(Item)`
  background: lightgray;
  color: gray;
  width: fit-content;
  border:none;
  &.complete {
    color:white;
  }
`;

export {
  Button
}