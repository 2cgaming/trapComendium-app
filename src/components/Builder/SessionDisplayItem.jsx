import React from 'react';
import style from 'styled-components'

import {NavButton} from '../Templates/Buttons.jsx';

export const SessionDisplayItem = ({item}) => {
  console.log(item.upgrades);
  return (
  <Component className="flex col">
    {item.name}<br/>
    Cost: {item.cost}
    {item.upgrades.map(upgrade => <ShortUpgrade upgrade={upgrade}/>)}
  </Component>
)};

const ShortUpgrade = ({upgrade}) => (
  <h5>{upgrade.name}x{upgrade.applications}</h5>
)

const Component = style(NavButton)`
  text-align: left;
  font-size: 1.2rem;
  border-radius: 5px;

  h5 {
    font-family: var(--fonts);
    font-size: 1rem;
  }

  &:hover {
    border: 3px solid black;
    color: white;
  }
`;