import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';

export const UpgradeListElement = ({upgrades, ...props}) => (
  <UpgradeWrapper>
    <h4>Upgrades</h4>
    {upgrades.map(upgrade => (
      <Upgrade 
        key={`upgrade_${upgrade._id}`}
        upgrade={upgrade}
        {...props}/>
    ))}
  </UpgradeWrapper>
)

export const Upgrade = ({upgrade, stateHandler, upgradesArray}) => {
  var {_id, name, cost, max, text} = upgrade;

  const handleInput = (e) => {
    var val = e.target.value;
    // console.log(val);
    var hasUpgrade = upgradesArray.findIndex(u => u._id == _id);
    
    if (val === 0) {
      stateHandler(upgradesArray.filter(u => u._id == _id));
    } else if (val > 0 && hasUpgrade === -1) {
      var newUpgrade = {
        _id,
        applications: val
      }
      stateHandler([...upgradesArray, newUpgrade])
    } else if (val > 0 && hasUpgrade > -1) {
      stateHandler(upgradesArray.map(u => {
        if (u._id == _id) {
          u.applications = val;
        }
        return u;
      }))
    }
  }

  return (
    <UpgradeDiv>
      <h4>{name}</h4>
      <div className="row">
        <h5><strong>Cost: </strong>{cost}</h5>
        <div>
          <label htmlFor='applications'>Applications: </label>
          <input 
            name='applications'
            type='number'
            defaultValue={0}
            min={0} max={max || 100}
            onChange={handleInput}
          />
        </div>
      </div>
      <p>{text}</p>
    </UpgradeDiv>
  )
};

const handleInput = (handler) => {
  return function(e) {

  }
}

const UpgradeWrapper = style.div`
  background: white;
  &:first-child {
    border: none;
  }

  .row {
    justify-content: space-between;
  }

  input {
    border: 2px solid gray;
    padding-left: 4px;
  }
`;

const UpgradeDiv = style.div`
  margin: 1rem;
  padding-top: 1rem;

  border: none;
  border-top: 1px solid gray;
  border-radius: 0px;
  p {
    margin-top: 0.3rem;
  }
`;

const mapStateToProps = ({upgrades}, props) => {
  //console.log(upgrades)
  const {item_id, type} = props;
  const filter = upgrade => {
    if (upgrade.type === type) {
      return upgrade.componentID === null || upgrade._id == item_id;
    }
    return false;
  };

  return {upgrades: upgrades.filter(filter)};
};

export const UpgradeList = connect(mapStateToProps)(UpgradeListElement)