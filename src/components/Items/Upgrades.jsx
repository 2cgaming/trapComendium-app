import React, {useState} from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';

import {Div} from './';

const UpgradeWrapper = style.div`
  background: white;
  &:first-child {
    border: none;
  }
`;

const UpgradeDiv = style(Div)`
  border: none;
  border-top: 1px solid gray;
  border-radius: 0px;
`

export const Upgrade = ({upgrade}) => (
  <UpgradeDiv>
    <h4>{upgrade.name}</h4>
    <h4><strong>Cost: </strong>{upgrade.cost}</h4>
    <p>{upgrade.text}</p>
    <input type="checkbox" />
  </UpgradeDiv>
);

export const UpgradeList = ({upgrades}) => (
  <UpgradeWrapper>
    <h3>Upgrades</h3>
    {upgrades.map(upgrade => <Upgrade key={`upgrade_${upgrade._id}`} upgrade={upgrade}/>)}
  </UpgradeWrapper>
)

const mapStateToProps = ({upgrades}, props) => {
  //console.log(upgrades)
  const {item_id, type} = props;
  var u = upgrades.filter(upgrade => {
    if (upgrade.type === type) {
      return upgrade.componentID === null || upgrade._id == item_id;
    }
    return false;
  });
  return {
    upgrades: u
  };
};

export default connect(mapStateToProps)(UpgradeList)