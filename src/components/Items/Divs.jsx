import React from 'react';
import style from 'styled-components';

import theme from '../../css.theme.json';

const Item = style.div`
  padding: 5px;
  margin: 10px;
  border: 3px solid black;
  border-radius:5px;
  background: white;
  &:hover {
    cursor: pointer;
  }
  h3 {
    font-size: 1.2em;
    font-weight: bold;
  }
  p {
    font-size: 0.9em
  }
`;

const NoHoverItem = style.div`
  &:hover {
    cursor: default;
  }
`;

const ConditionalItem = style(Item)`
width: 11em;
border-radius: 5px;
&:hover {
  cursor: pointer;
}
${props => {
  switch (props.status) {
    case 'not_required' : return `
      border: 3px solid white;
      background: lightgray;
      color: white;
      &:hover {
        border: 3px solid gray;
        color: black;
      }
      `;
    case 'required': return `
      border: 3px solid ${theme.primary_color};
      background: white;
      color: ${theme.primary_color};
      &:hover {
        border: 3px solid white;
        color: white;
        background: ${theme.primary_color};
      }
      `;
    case 'complete': return `
      border: 3px solid green;
      background: white;
      color: black;
      &:hover {
        border: 3px solid black;
        color: white;
        background: ${theme.primary_color};
      }
    `;
  }
}}
`;

const Cost = style.h4`
  &:before {
    content: "Cost: ";
  }
`;

export {
  Item,
  ConditionalItem,
  NoHoverItem,
  Cost
}