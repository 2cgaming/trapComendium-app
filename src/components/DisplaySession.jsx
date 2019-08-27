import React from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';
import {actions} from '../store';
import {ConditionalItem as Component, Item} from './Items';

const mapStateToProps = ({session}) => ({session});

const mapDispatchToProps = (dispatch, props) => ({
  updatePage: (num) => {
    dispatch(actions.handlePage(num));
  }, 
  updateFocus: (str) => {
    dispatch(actions.handleFocus(str));
  }
})

export function SessionView({session, updateFocus, updatePage}) {
  const {mitigation, trigger, target, component} = session;
  const isComplete = trigger.length && target.length && component.length;
  return (
    <div>
      <Components data={trigger} type='trigger' updateFocus={updateFocus} updatePage={updatePage}/>
      <Components data={target} type='target' updateFocus={updateFocus} updatePage={updatePage}/>
      <Components data={component} type='component' updateFocus={updateFocus} updatePage={updatePage}/>
      <Components data={mitigation} type='mitigation' updateFocus={updateFocus} updatePage={updatePage}/>
      <Button isComplete={isComplete}>Finalize Trap</Button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionView);

export function Components({data, type, updateFocus, updatePage}) {
  const isRequired = !data.length && type !== 'mitigation';
  return (
    <div>
      {data.map(component => (
        <Component status='complete'>
          {component.name}
          {component.cost}
        </Component>
      ))}
      <Component
        status={isRequired ? 'required' : 'not_required'}
        onClick={() => {
          updateFocus(type);
          updatePage(2);
        }}>
        {isRequired
          ? `${capFirst(type)} Required +`
          : `Add ${capFirst(type)} +`}
      </Component>
    </div>
  )
}

const Button = style(Item)`
  background: lightgray;
  color: gray;
  width: fit-content;
  border:none;
  ${props => {
    return props.isComplete
      ? 'color:white;'
      : ''
  }}
`;

function capFirst (string) {
  let letter = string[0].toUpperCase();
  return letter + string.slice(1);
}