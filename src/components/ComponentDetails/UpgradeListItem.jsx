import React from 'react';
import style from 'styled-components';

export const UpgradeListItem = ({upgrade, handler}) => {
  var {id, name, cost, max, text} = upgrade;

  return (
    <UpgradeWrapper key={id}>
      <h4>{name}</h4>
      <div className="row">
        <h5><strong>Cost: </strong>{cost}</h5>
        <div>
          <label htmlFor='applications'>Applications: </label>
          <input 
            name='applications'
            type='number'
            defaultValue={0}
            min={0} max={max || 50}
            onChange={(e) => handler(e,upgrade)}
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