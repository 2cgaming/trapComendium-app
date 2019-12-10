import React from 'react';
import style from 'styled-components';
import {BrowserRouter as Router, Link} from 'react-router-dom';

export const SessionDisplay = ({session}) => {
  const {triggers, targets, effects} = session;
  const isComplete = triggers.length && targets.length && effects.length;
  return (
    <div>
      {triggers.map(trigger => <TrapComponent item={trigger}/>)}
      {targets.map(target => <TrapComponent item={target}/>)}
      {effects.map(effect => <TrapComponent item={effect}/>)}
    </div>
  )
}

export const TrapComponent = ({item}) => (
  <Component className="flex col">
    {item.name}<br/>
    Cost: {item.cost}
  </Component>
);

const StyledDiv = style.div`
  padding: 5px;
  margin: 10px;

  border-radius: 5px;

  font: var(--fonts);
  font-size: 1.5rem;
  text-align-last: center;
`

const Component = style(StyledDiv)`
  width: 15rem;
  border: 3px solid black;
  background: white;
  color: black;

  &:hover {
    border: 3px solid black;
    color: green;
  }
`;