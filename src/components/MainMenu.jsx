import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {GrayButton} from './Templates/Buttons.jsx'

const UserTrapDisplay = ({match, traps}) => (
  <div style={{paddingTop: '10px'}}>
    {traps.map(trap => <TrapSmall trap={trap}/>)}
    <GrayLink text={'Build New Trap +'} dest={match.url + 'build'}/>
  </div>
);

const TrapSmall = ({trap}) => (
  <div className="col">
    <p>{trap.name || 'Unnamed Trap'}</p>
    <p>{trap.text || ''}</p>
    <p>{'cost: ' + trap.cost}</p>
  </div>
);

export const GrayLink = ({dest, text}) => (
  <Link to={dest}>
    <GrayButton>{text}</GrayButton>
  </Link>
);

const mapStateToProps = ({traps}) => ({traps});

export default connect(mapStateToProps)(UserTrapDisplay)