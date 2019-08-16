import React from 'react';
import style from 'styled-components';

const StatBar = style.div`
  width: 80%;
  margin: 20px auto;
  font-size: 1.3em;
  .row {
    text-align: center;
    justify-content: space-evenly
    margin-bottom: 10px;
    * {
      margin-left: 10px;
    }
  }
  .display {
    background: #cdcdcd;
  }
`;

export default ({stats}) => {
  const {tier, xp, cost, perceptionDC, disarmDC} = stats;
  return (
    <StatBar>
      <div className="row">
        <div className="trap_tier">
          Tier
          <span className="tier_count display">{tier}</span>
        </div>
        <div className="trap_cost">
          Cost
          <span className="cost_count display">{cost}</span>
        </div>
        <div className="trap_xp">
          XP
          <span className="xp_count display">{xp}</span>
        </div>
      </div>
      <div className="row">
        <div className="trap_perception_dc">
          Perception DC
          <span className="perception_dc display">{perceptionDC}</span>
        </div>
        <div className="trap_display_dc">
          Disarm DC
          <span className="perception_dc display">{disarmDC}</span>
        </div>
      </div>
    </StatBar>
     
  )
}

/* <select name="tier" onChange={handleSelect}>
            <option value="1" defaultValue >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select> */