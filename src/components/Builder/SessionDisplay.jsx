import React from 'react';
import style from 'styled-components';
// import {BrowserRouter as Router, Link} from 'react-router-dom';

import {SessionDisplayItem as Component} from './SessionDisplayItem.jsx'
import {HorizontalLine} from '../Templates/Lines.jsx';

export const SessionDisplay = ({session}) => {
  const {triggers, targets, effects} = session;
  return (
    <MenuDiv>
      <h6>Selected Components:</h6>
      <Line/>
      {triggers.map(trigger => <Component item={trigger}/>)}
      {targets.map(target => <Component item={target}/>)}
      {effects.map(effect => <Component item={effect}/>)}
    </MenuDiv>
  )
}

const MenuDiv = style.div`
  width: 15rem;
  border: 1px solid lightgray;
`;

const Line = style(HorizontalLine)`
  width: 100%;
  height: 0px;
`;