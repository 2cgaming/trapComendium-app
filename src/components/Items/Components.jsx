import React, {useState} from 'react';
import style from 'styled-components';

import {Item, Upgrades} from './';

const StyledItem = style(Item)`
  max-width: 50%;
`;

const Subheaders = ({item, type}) => {
  switch (type) {
    case 'component' :
      return (
        <table>
          <tbody>
            <tr>
              <td style={{border: '1px solid red'}}>
                Table of component options will go here
              </td>
            </tr>
          </tbody>
        </table>)
    case 'trigger' :
      return <h4>Cost: {item.cost} <br/> Size: {item.size}</h4>;
    case 'target' :
      return <h4>Cost: {item.cost}<br/>Target Area: 5ft</h4>;
    case 'mitigation' :
      return <h4>Cost: {item.cost}</h4>;
  }
}

const TextBox = style.p``;

// text should cut off
const TrapItem = ({item, changeFocus, type, upgrades}) => (
  <StyledItem key={item.id}
    onClick={() => changeFocus(item.id)} >
    <h3>{item.name}</h3>
    <Subheaders type={type} item={item}/>
    <TextBox>
      {item.text}
    </TextBox>
    {upgrades ? upgrades : null}
  </StyledItem>
);

const ModalItem = ({item, type}) => (
  <TrapItem
    item={item}
    type={type} 
    upgrades={
      type !== 'mitigation'
      ? <Upgrades upgrades={item.upgrades} />
      : null}
    changeFocus={() => console.log('you clicked me!')}
  />
)

export {
  TrapItem,
  ModalItem
}

/* max-height: 3.6em;
  overflow: hidden;
  background-image: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 25%);
 const TextBox = style.p``;
 // expand text zone?

 */