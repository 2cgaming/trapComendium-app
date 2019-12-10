import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

import {NavButton} from '../Templates/NavButton.jsx';
import {FinishButton} from '../Items';
import {SessionDisplay} from './SessionDisplay.jsx';

/**BuilderMenu displays prompts for adding trap components and a display for 
the components already added*/
export const BuilderMenu = ({session, match}) => {
  const {triggers, targets, effects} = session;
  const isComplete = triggers.length && targets.length && effects.length;
  return (
    <div className="flex row">
      <div>
        <Button to='build/trigger'>Add Trigger +</Button>
        <Button to='build/target'>Add Targetting +</Button>
        <Button to='build/effect'>Add Component +</Button>
        <FinishButton isComplete={isComplete}>Finalize Trap</FinishButton>
      </div>
      <SessionDisplay session={session}/>
    </div>
  )
};

export const ComponentLink = ({match, type}) => (
  <Link to={match.url + '/' + type}>
    <AddComponentButton>{`Add ${capFirst(type)} +`}</AddComponentButton>
  </Link>
);

function capFirst (string) {
  let letter = string[0].toUpperCase();
  return letter + string.slice(1);
};

const Button = style(NavButton)`
  display: block;
  margin: 10px;
`;

const mapStateToProps = ({session}) => ({session});

export default connect(mapStateToProps)(BuilderMenu);