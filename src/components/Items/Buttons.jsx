import React from 'react';
import style from 'styled-components';
import {Div} from './';

const Button = style(Div)`
  background: lightgray;
  color: gray;
  width: fit-content;
  border: none;
`;

const ReturnButton = style(Button)`
  color: white;
  width: 3em;
  text-align: center;
`;

const AddButton = style(Button)`
  padding: 5px 10px;
  border: 3px solid white;
  border-radius: 5px;
  background: lightgray;
  color: white;
  &:hover {
    cursor: pointer;
    border: 3px solid gray;
    color: black;
  }
  ${props => {
    if (props.isRequired) {
      return `
        border: 3px solid var(--primary-color);
        background: white;
        color: var(--primary-color);
        &:hover {
          border: 3px solid white;
          color: white;
          background: var(--primary-color);
        }`
    }
  }}
`;

const FinishButton = style(Button)`
  ${props => {
    return props.isComplete
      ? `color:white;
        border: green;`
      : ''
  }}
`;

export {
  ReturnButton,
  FinishButton,
  AddButton,
  Button
}