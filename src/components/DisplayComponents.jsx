import React, {useState} from 'react';
import style from 'styled-components';

import {TrapItem as Item, ModalItem} from './Items';
import {Modal} from './Items';


export default function DisplayComponents({data, type, updatePage}) {
  let [menuFocus, changeFocus] = useState();
  return (
  <div>
    {menuFocus !== undefined
      ? (<Modal
        closeModal={() => changeFocus(undefined)}
        element={<ModalItem item={data[menuFocus]} type={type}/>}
        />)
      : null}
    <button style={{border: "1px solid pink"}} type='button' onClick={() => updatePage(1)}>
      ⬅︎ go back
    </button>
    {Object.values(data).map(item => (
      <Item key={item.id} item={item} type={type} changeFocus={changeFocus}/>
    ))}
  </div>)
}