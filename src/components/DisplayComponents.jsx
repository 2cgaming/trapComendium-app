import React, {useState} from 'react';
import style from 'styled-components';
import {connect} from 'react-redux';
import {actions} from '../store';

import {MenuItem, ModalItem, Console, ReturnButton} from './Items';
import {Modal} from './Items';


const mapStateToProps = ({focus, options}) => ({
  data: options[focus],
  type: focus
});

const mapDispatchToProps = (dispatch) => ({
  updatePage: (num) => {
    dispatch(actions.handlePage(num));
  }
})

const FlexBox = style.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export function DisplayComponents({data, type, updatePage}) {
  let [menuFocus, changeFocus] = useState();
  return (
  <Console>
    {menuFocus !== undefined
      ? (<Modal
        closeModal={() => changeFocus(undefined)}
        element={<ModalItem item={data[menuFocus]} type={type}/>}
        />)
      : null}
    <ReturnButton onClick={() => updatePage(1)} >⬅︎</ReturnButton>
    <FlexBox>
      {Object.values(data).map(item => (
        <MenuItem key={item.id} item={item} type={type} changeFocus={changeFocus}/>
      ))}
    </FlexBox>
  </Console>)
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponents);