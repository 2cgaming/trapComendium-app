import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';

import {UpgradeListItem as Upgrade} from './UpgradeListItem.jsx';

export const UpgradeList = ({upgrades, ...props}) => (
  <UpgradeListWrapper>
    <h4>Upgrades</h4>
    {upgrades.map(upgrade => (
      <Upgrade 
        key={`upgrade_${upgrade._id}`}
        upgrade={upgrade}
        {...props}/>
    ))}
  </UpgradeListWrapper>
);

const UpgradeListWrapper = style.div`
  background: white;
  &:first-child {
    border: none;
  }
  .row {
    justify-content: space-between;
  }
  label {
    font-size: inherit;
  }
  input {
    border: 2px solid gray;
    padding-left: 4px;
    font-family: inherit;
    font-size: inherit;
  }
`;

const mapStateToProps = ({upgrades}, props) => {
  const {item_id, type} = props;
  const filter = upgrade => {
    if (upgrade.type === type) {
      return upgrade.componentID === null || upgrade._id == item_id;
    }
    return false;
  };

  return {upgrades: upgrades.filter(filter)};
};

export default connect(mapStateToProps)(UpgradeList)