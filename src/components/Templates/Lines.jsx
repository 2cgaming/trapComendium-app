import React from 'react';
import style from 'styled-components';

var Line = style.div`
  border: 2px solid lightgray;
  border-radius: 2px;`;

export const VerticalLine = style(Line)`
  width: 2px;
`;

export const HorizontalLine = style(Line)`
  width: 90%;
  height: 2px;
  margin: 0 auto;
`;