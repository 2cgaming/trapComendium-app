import React from 'react';
//import style from 'styled-components';
import {connect} from 'react-redux';
import {actions} from '../store';
import {RequiredItem, Console, FinishButton} from './Items';

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
    <Console>
      <ItemList data={trigger} type='trigger' updateFocus={updateFocus} updatePage={updatePage}/>
      <ItemList data={target} type='target' updateFocus={updateFocus} updatePage={updatePage}/>
      <ItemList data={component} type='component' updateFocus={updateFocus} updatePage={updatePage}/>
      <ItemList data={mitigation} type='mitigation' updateFocus={updateFocus} updatePage={updatePage}/>
      <FinishButton isComplete={isComplete}>Finalize Trap</FinishButton>
    </Console>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionView);

export function ItemList({data, type, updateFocus, updatePage}) {
  const isRequired = !data.length && type !== 'mitigation';
  return (
    <div>
      {data.map(component => (
        <RequiredItem status='complete'>
          {component.name}
          {component.cost}
        </RequiredItem>
      ))}
      <RequiredItem
        status={isRequired ? 'required' : 'not_required'}
        onClick={() => {
          updateFocus(type);
          updatePage(2);
        }}>
        {isRequired
          ? `${capFirst(type)} Required +`
          : `Add ${capFirst(type)} +`}
      </RequiredItem>
    </div>
  )
}

function capFirst (string) {
  let letter = string[0].toUpperCase();
  return letter + string.slice(1);
}