import React from 'react';
import style from 'styled-components';
// import {BrowserRouter as Router, Link} from 'react-router-dom';

import {SessionDisplayItem as Component} from './SessionDisplayItem.jsx'
import {HorizontalLine} from '../Templates/Lines.jsx';

export const SessionDisplay = ({session}) => {
  const {triggers, targets, effects} = session;
  var l = triggers.length + targets.length + effects.length;
  return (
    <SessionWrapper>
      <label htmlFor='trap_name'>Trap Name</label>
      <div>
        <input name={'trap_name'} type='text' defaultValue='My Dastardly Trap'/>
      </div>
      <label htmlFor="trap_text">Description</label>
      <div>
        <textarea name={'trap_text'} type='text' rows='4' defaultValue='It slices, it dices, and it only sometimes kills player characters'/>
      </div>
      {l === 0 ? <Line/> : null}
      {l === 0 ? <h6>No parts selected</h6> : null}
      {triggers.map(trigger => <Component item={trigger} key={trigger.id}/>)}
      {targets.map(target => <Component item={target} key={target.id}/>)}
      {effects.map(effect => <Component item={effect} key={effect.id}/>)}
    </SessionWrapper>
  )
}

const SessionWrapper = style.div`
  width: 15rem;
  font-size: 1.2rem;

  input, textarea {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  textarea {
    width: fill-available;
  }
`;

const Line = style(HorizontalLine)`
  width: 100%;
  border-width: 1px;
`;