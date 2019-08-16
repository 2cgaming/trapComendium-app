import React from 'react';
import style from 'styled-components';

const TrapComponent = style.div`
  width: 100%;
  max-width: 15em;
  margin: 12px auto;
  padding: 12px;
  border: 2px solid gray;
  transition-duration: 200ms;
  text-align: center;
  &:hover {
    padding: 10px;
    border: 4px solid #880000;
    cursor: pointer;
  }
`;


// expands to create new trap component
const EmptyComponent = ({addTrapComponent}) => (
  <TrapComponent>
    <div>+ Add to Trap</div>
  </TrapComponent>
)

// expands to allow editing and deletion of trap component
const FilledComponent = ({component, updateTrapComponent}) =>(
  <TrapComponent>
    <p>{component.name}</p>
    <p>{component.text}</p>
  </TrapComponent>
)

export default ({component}) => (
  <div>
    {component ? 
      <FilledComponent component={component}/>
      : <EmptyComponent />}
    </div>
);
