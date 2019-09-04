import React, {useState} from 'react';
import style from 'styled-components';

import {Div} from './';

const UpgradeWrapper = style.div`
  background: white;
  &:first-child {
    border: none;
  }
`;

const UpgradeItem = style(Div)`
  border: none;
  border-top: 1px solid gray;
  border-radius: 0px;
`

const Upgrade = ({upgrade}) => (
  <UpgradeItem>
    <h3>{upgrade.name}</h3>
    <h4><strong>Cost: </strong>{upgrade.cost}</h4>
    <p>{upgrade.text}</p>
    <input type="checkbox" />
  </UpgradeItem>
);

const Upgrades = ({upgrades}) => (
  <UpgradeWrapper>
    <h3>Upgrades</h3>
    {upgrades.map(upgrade => <Upgrade upgrade={upgrade}/>)}
  </UpgradeWrapper>
)

export {Upgrades, Upgrade};