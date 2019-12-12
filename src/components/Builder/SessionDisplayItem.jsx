import React from 'react';
import style from 'styled-components'

import {Button} from '../Templates/Buttons.jsx';
import {Cost, Tier} from '../Templates/TextFields.jsx';

export const SessionDisplayItem = ({item}) => {
  var {name, upgrades, cost, tier} = item;
  console.log(item);
  return (
  <Component className="flex col">
    {name}<br/>
    <Cost cost={cost}/>
    <Tier tier={tier}/>
    {upgrades.map(upgrade => <ShortUpgrade upgrade={upgrade}/>)}
  </Component>
)};

const Component = style(Button)`
  width: auto;
  text-align: left;
  font-size: 1.2rem;
  border-top: 2px solid lightgray;

  h5 {
    font-family: var(--font);
    font-size: 1rem;
  }
`;

const ShortUpgrade = ({upgrade}) => (
  <h5>{upgrade.name}x{upgrade.applications}</h5>
)

// const Component = style(NavButton)`
//   text-align: left;
//   font-size: 1.2rem;
//   border: none;

//   border-top: 2px solid lightgray;

//   h5 {
//     font-family: var(--font);
//     font-size: 1rem;
//   }

//   &:hover {
//     border: 3px solid black;
//     color: white;
//   }
// `;