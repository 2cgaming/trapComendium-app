import React from 'react';
import style from 'styled-components';

export const Modal = ({Element, history, ...props}) => (
  <Wrapper id="modal-wrapper" onClickCapture={eventHandler(history)}>
    <Element {...props}/>
  </Wrapper>
);

export const Wrapper = style.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #d2d2d2a6;
  padding-top: 3rem;
  animation: fadein 0.4s;
  -webkit-animation: fadein 0.4s;
`;

function eventHandler(history) {
  return function(e) {
    if (e.target === e.currentTarget) {
      history.goBack();
    }
  }
}