import React from 'react';
import style from 'styled-components';
import {Upgrades, Subheaders, Div} from './';

const ModalWrapper = style.div`
  position:fixed;
  left:0;
  top:0;
  width: 100vw;
  height: 100vh;
  background: #d2d2d2a6;
  padding-top: 5vh;
`;

const ModalStyledItem = style(Div)`
  max-width: 70%;
  overflow-y: scroll;
  margin: auto;
  max-height: 90vh;
  padding: 1em;
  > h3 {
    font-size: 1.4em;
    text-align: center;
  }
  > h4 {
    padding-left: 2em;
  }
  > p {
    text-indent: 2em;
    text-align: justify;
    padding: 1em;
  }
  table {
    font-size: 1.2em;
    margin: 1em auto 0 auto;
  }
  > * {
    padding-top: 1em;
  }
`;

const ModalItem = ({item, changeFocus, type}) => (
  <ModalStyledItem key={item.id}
    onClick={() => console.log('you clicked me!')} >
    <h3>{item.name}</h3>
    <Subheaders type={type} item={item}/>
    <p>
      {item.text}
    </p>
    {type !== 'mitigation'
      ? <Upgrades upgrades={item.upgrades} />
      : null}
    <button type="button">CLICK ME TO ADD TO TRAP</button>
  </ModalStyledItem>
);

function eventHandler(cb) {
  return function(e) {
    if (e.target === e.currentTarget) {
      cb();
    }
  }
}

const Modal = ({element, closeModal}) => (
  <ModalWrapper id="modal-wrapper" onClickCapture={eventHandler(closeModal)}>
    {element}
  </ModalWrapper>
);

export {
  Modal,
  ModalItem,
};