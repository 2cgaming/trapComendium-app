import React, {useState} from 'react';
import {connect} from 'react-redux';
import style from 'styled-components';

import {actions} from '../store';

import {Console} from './Items';
import {Trigger, Target, Component} from './Items/DisplayItems';
import {AddButton} from './Items/Buttons.jsx';

let SessionForm = style.div`
  .row, .col {
    border: 1px solid orange;
  }
`;

const SessionDisplay = ({session, addItem}) => {
  let {cost} = session;
  let [title, updateTitle] = useState(session.title);
  let [description, updateDescription] = useState(session.description);

  return (
    <Console>
      <SessionForm id="session_form">
        <div className="row" style={{justifyContent: "space-between"}}>
          <input width="50%" placeholder="Trap Title" type="text" id="session_title" defaultValue={title} onChange={e=> updateTitle(e.target.value)}/>
          <div className="row">
            <h3>Tier: {calculateTierFromCost(cost)}</h3>
            <h3>Points: {calculatePointsFromCost(cost)}</h3>
            <h3>Cost: {cost}</h3>
            <h3>Exp: {calculateExpFromCost(cost)}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Perception DC: {session.perceptionDC}</h4>
            <h4>Disarm DC: {session.disarmDC}</h4>
            <AddButton onClick = {addItem} data-type="mitigation">Upgrade Mitigation</AddButton>
          </div>
          <input placeholder="Trap Description" type="text" id="session_desc" defaultValue={description} onChange={e=> updateDescription(e.target.value)}/>
        </div>
        <div className="row wrap">
          {session.trigger.map(trigger => <Trigger item={trigger}/>)}
        </div>
        <AddButton data-type="trigger" isRequired={session.trigger.length === 0}>Add Trigger</AddButton>
        <div className="row wrap">
          {session.target.map(target => <Target item={target}/>)}
        </div>
        <AddButton data-type="target" isRequired={session.target.length === 0}>Add Target</AddButton>
        <div className="row wrap">
          {session.component.map(component => <Component item={component}/>)}
        </div>
        <AddButton data-type="component" isRequired={session.component.length === 0}>Add Component</AddButton>
      </SessionForm>
    </Console>
  )
}


const mapStoreToProps = ({session}) => ({session});

const mapDispatchToProps = (dispatch) => ({
  addItem: (e) => {
    console.log(e)
  }
})

function calculateTierFromCost(cost) {
  return 11;
}

function calculatePointsFromCost(cost) {
  return 22;
}

function calculateExpFromCost(cost) {
  return 4444;
}

export default connect(mapStoreToProps, mapDispatchToProps)(SessionDisplay);