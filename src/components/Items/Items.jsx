import React, {useState} from 'react';
import style from 'styled-components';

import {Div, ComponentTable} from './';

const StyledItem = style(Div)`
  width: 45%;
`;

const Subheaders = ({item, type}) => {
  switch (type) {
    case 'component' :
      return <ComponentTable params={item.params} />;
    case 'trigger' :
      return <h4><strong>Cost:</strong> {item.cost} <br/> <strong>Size:</strong> {item.size}</h4>;
    case 'target' :
      return <h4><strong>Cost:</strong> {item.cost}<br/><strong>Target Area:</strong> 5ft</h4>;
    case 'mitigation' :
      return <h4><strong>Cost:</strong> {item.cost}</h4>;
  }
}

// text should cut off
const MenuItem = ({item, changeFocus, type}) => (
  <StyledItem key={item.id}
    onClick={() => changeFocus(item.id)} >
    <h3>{item.name}</h3>
    <Subheaders type={type} item={item}/>
    <p>
      {item.text}
    </p>
  </StyledItem>
);

const RequiredItem = style(Div)`
  width: 11em;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  ${props => {
    switch (props.status) {
      case 'not_required' : return `
        border: 3px solid white;
        background: lightgray;
        color: white;
        &:hover {
          border: 3px solid gray;
          color: black;
        }
        `;
      case 'required': return `
        border: 3px solid var(--primary-color);
        background: white;
        color: var(--primary-color);
        &:hover {
          border: 3px solid white;
          color: white;
          background: var(--primary-color);
        }
        `;
      case 'complete': return `
        border: 3px solid green;
        background: white;
        color: black;
        &:hover {
          border: 3px solid black;
          color: white;
          background: var(--primary-color);
        }
      `;
    }
  }}
`;

export {
  MenuItem,
  RequiredItem,
  Subheaders
}

/* max-height: 3.6em;
  overflow: hidden;
  background-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%);
 const TextBox = style.p``;
 // expand text zone?

 */