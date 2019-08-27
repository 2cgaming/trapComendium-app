import React, {useState} from 'react';
import style from 'styled-components';

import {Item, Cost} from './';

const UpgradeWrapper = style.div`
  background: white;
  &:first-child {
    border: none;
  }
`;

const UpgradeItem = style(Item)`
  border: none;
  border-top: 1px solid gray;
  border-radius: none;
`

const Upgrade = ({upgrade}) => (
  <UpgradeItem>
    <h3>{upgrade.name}</h3>
    <Cost>{upgrade.cost}</Cost>
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