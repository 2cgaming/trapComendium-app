import React, {useState} from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import UpgradeList from './UpgradeList.jsx';
import {TierTable as Tiers} from './Tiers.jsx';
import {GrayButton} from '../Templates/Buttons.jsx';
import {Cost} from '../Templates/TextFields.jsx';

const Component = ({component, match, addToSession}) => {
  const {type, name, text, cost, tiers} = component;
  var [upgrades, uHandler] = useState(component.upgrades || []);

  const handleUpgrades = (e, upgrade) => {
    var applications = e.target.value;
    if (applications === 0) {
      uHandler(upgrades.filter(u => u.id == upgrade.id));
    } else {
      var index = upgrades.findIndex(u => u.id == upgrade.id);
      if (index === -1) {
        var newUpgrade = Object.create(upgrade);
        newUpgrade.applications = applications;
        uHandler([...upgrades, newUpgrade])
      } else {
        upgrades[index].applications = applications;
        uHandler(upgrades)
      }
    }
  }
  // var [totalCost, updateCost] = useState(component.cost || 0)
  var [tier, tierHandler] = useState(component.tier || 1)

  return (
    <ComponentWrapper className="col">
      <h3>{name}</h3>
      <Cost cost={cost}/>
      <TextBox>{text}</TextBox>
      <Tiers tiers={tiers} tierNum={tier} handler={tierHandler}/>
      {<UpgradeList type={type} item_id={match.params.item_id} handler={handleUpgrades}/>}
      {/* <TotalCost cost={cost}/> */}
      <Link to="/build" onClick={() => addToSession(component, upgrades, tier)}>
        <GrayButton>Add</GrayButton>
      </Link>
    </ComponentWrapper>
  )
}

// const TotalCost = ({cost}) => (
//   <h5><strong>Total Cost: </strong>{cost}</h5>
// );

const ComponentWrapper = style.div`
  max-width: calc(60% + 100px);
  max-height: 85vh;
  margin: auto;
  padding: 1em;

  background: white;
  border: 1px solid gray;
  border-radius: 10px;

  align-items: center;
  overflow-y: scroll;

  > * {
    padding-top: 1rem;
  }
  input {
    border: 2px solid gray;
    padding-left: 4px;
    font-family: inherit;
    font-size: inherit;
  }
`;

const TextBox = style.p`
  text-indent: 2em;
  text-align: justify;
  padding: 1rem 2rem;
`;

const mapStateToProps = ({components}, props) => {
  const {item_id} = props.match.params;

  // note loose equality
  const component = components.find(comp => comp.id == item_id);

  return {component};
};

const mapActionsToProps = dispatcher => {
  const addToSession = (component, upgrades, tier) => {
    component.upgrades = upgrades;
    if (component.type === 'effect') component.tier = tier;
    dispatcher({type: 'ADD_TO_SESSION', component});
  }
  return {addToSession};
}

export const ComponentDetails = connect(mapStateToProps, mapActionsToProps)(Component);