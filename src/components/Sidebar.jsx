import React from 'react';
import style from 'styled-components';

const Sidebar = style.div`
  width: 25%;
  max-width: 280px;
  background-color: #9ea1ee30;
`;

export default () => {
  return (
    <Sidebar>
      <p> hello world, I am Mr. Sidebar</p>
      {/* <Components data={mitigation} type='mitigation'/>
      <Components data={trigger} type='trigger'/>
      <Components data={target} type='target'/>
      <Components data={component} type='component'/>
      <div>
        Finalize Trap
      </div> */}
    </Sidebar>
  )
}
/*

  // updateStatsFromCost() {
  //   this.setState(state => {
  //     var cost = 0;
  //     const addToCost = obj => {
  //       cost+= obj.cost;
  //       if (obj.upgrades) {
  //         obj.upgrades.forEach(addToCost);
  //       }
  //     }
  //     state.mitigation.forEach(addToCost);
  //     state.trigger.forEach(addToCost);
  //     state.target.forEach(addToCost);
  //     state.component.forEach(addToCost);
  //     state.cost = cost;
  //   })
  // }
*/


/*
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
      */