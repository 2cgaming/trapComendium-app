import React, {useState} from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import UpgradeList from './UpgradeList.jsx';
import {TierTable} from './Tiers.jsx';
import {GrayButton} from '../Templates/Buttons.jsx';

const Component = ({component, match, addToSession}) => {
  const {type, name, text, cost, params} = component;
  var [chosen, upgradesHandler] = useState(component.upgrades || []);
  // var [totalCost, updateCost] = useState(component.cost || 0)

  return (
    <ComponentWrapper className="col">
      <h3>{name}</h3>
      {cost !== undefined ? <h5><strong>Cost: </strong>{cost}</h5> : null}
      <TextBox>{text}</TextBox>
      {params ? <TierTable tiers={tiers}/> : null}
      {<UpgradeList type={type} item_id={match.item_id} chosen={chosen} handler={upgradesHandler}/>}
      {/* <TotalCost cost={cost}/> */}
      <Link to="/build" onClick={() => addToSession(component, chosen)}>CLICK TO ADD</Link>
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

  table {
    font-size: 1.2em;
    margin: 1em auto 0 auto;
  }

  > * {
    padding-top: 1rem;
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
  const component = components.find(comp => comp._id == item_id);

  return {component};
};

const mapActionsToProps = dispatcher => {
  const addToSession = (component, upgrades) => {
    component.upgrades = upgrades;
    dispatcher({type: 'ADD_TO_SESSION', component});
  }
  return {addToSession};
}

export const ComponentDetails = connect(mapStateToProps, mapActionsToProps)(Component);