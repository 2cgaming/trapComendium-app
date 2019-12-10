import React, {useState} from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {UpgradeList} from './UpgradeList.jsx';

export const ComponentElement = ({data, match, addToSession}) => {
  
  const {type, name, text} = data;

  var [upgradesArray, updateUpgrades] = useState(data.upgrades || []);

  return (
    <Wrapper className="col">
      <h3>{name}</h3>
      <Cost type={type} item={data}/>
      <TextBox>{text}</TextBox>
      {/**param tables if needed */}
      {<UpgradeList type={type} item_id={match.item_id} upgradesArray={upgradesArray} stateHandler={updateUpgrades}/>}
      <p>Total Cost will go here!</p>
      <Link to="/build" onClick={() => addToSession(data, upgradesArray)}>CLICK TO ADD</Link>
    </Wrapper>
  )
};

const Cost = ({item, type}) => {
  if (type !== 'effect') {
    return <h5><strong>Cost:</strong> {item.cost}</h5>
  }
}

const Wrapper = style.div`
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

  return {data: component};
};

const mapActionsToProps = dispatcher => {

  const addToSession = (component, upgrades) => {
    component.upgrades = upgrades;
    dispatcher({type: 'ADD_TO_SESSION', component});
  }

  return {addToSession};
}

export const DetailedItem = connect(mapStateToProps, mapActionsToProps)(ComponentElement);