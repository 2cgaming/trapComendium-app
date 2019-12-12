import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

import {FinalizeButton, NavButton, ReturnButton} from './Templates/Buttons.jsx';
import {VerticalLine} from './Templates/Lines.jsx'
import {SessionDisplay} from './Builder/SessionDisplay.jsx';

// needs navigation back to main menu

/**BuilderMenu displays prompts for adding trap components and a display for 
the components already added*/
export const BuildMenu = ({session, match, dispatch, history}) => {
  const {triggers, targets, effects} = session;
  const isComplete = triggers.length > 0 && targets.length > 0 && effects.length > 0;
  const handler = () => {
    if (isComplete) {
      dispatch({type: 'ADD_TRAP', trap: session});
      history.push('/');
    }
  }
  return (
    <div>
      <Link to="/">
        <ReturnButton>⬅︎</ReturnButton>
      </Link>
      <Console>
        <MenuDiv>
          <ComponentListLink dest={match.url + '/trigger'} text={'Add Trigger +'}/>
          <ComponentListLink dest={match.url + '/target'} text={'Add Target +'}/>
          <ComponentListLink dest={match.url + '/effect'} text={'Add Effect +'}/>
        </MenuDiv>
        <VerticalLine></VerticalLine>
        <SessionDisplay session={session}/>
      </Console>
      <FinalizeButton isComplete={isComplete} onClick={handler}>Finalize Trap</FinalizeButton>
    </div>
  )
};

const Console = style.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MenuDiv = style.div`
  width: 15rem;
`;

export const ComponentListLink = ({dest, text}) => (
  <Link to={dest}>
    <NavButton>{text}</NavButton>
  </Link>
);

const mapStateToProps = ({session}) => ({session});

export default connect(mapStateToProps)(BuildMenu);