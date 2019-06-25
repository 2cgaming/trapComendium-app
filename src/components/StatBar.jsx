import React from 'react';
import './StatBar.scss';

export default function StatBar({handleSelect, trap}) {
  const {xp, cost} = trap;
  return (
  <div className="navbar row">
    <div className="trap_tier">
      <h4>Tier</h4>
      <select name="tier" onChange={handleSelect}>
        <option value="1" defaultValue >1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
    <div className="trap_cost">
      <h4>Cost</h4>
      <div className="cost_count display">{cost}</div>
    </div>
    <div className="trap_xp">
      <h4>XP</h4>
      <div className="xp_count display">{xp}</div>
    </div>
  </div>
  )
}