import React from 'react';
import style from 'styled-components';

export const UpgradeListItem = ({upgrade, handler, chosen}) => {
  var {_id, name, cost, max, text} = upgrade;

  const handleInput = (e) => {
    var applications = e.target.value;
    if (applications === undefined || applications === null) {
      console.log("error finding upgrade's application input value")
    } else if (applications === 0) {
      handler(chosen.filter(u => u._id == _id));
    } else {
      var index = chosen.findIndex(u => u._id == _id);
      if (index === -1) {
        var newUpgrade = {
          _id,
          name,
          applications
        }
        handler([...chosen, newUpgrade])
      } else {
        chosen[index].applications = applications;
        handler(chosen)
      }
    }
  }

  return (
    <UpgradeWrapper>
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
    </UpgradeWrapper>
  )
};

const UpgradeWrapper = style.div`
  margin: 1rem;
  padding-top: 1rem;

  border: none;
  border-top: 1px solid gray;
  border-radius: 0px;
  p {
    margin-top: 0.3rem;
  }
`;