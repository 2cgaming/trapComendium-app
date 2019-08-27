import React from 'react';
import style from 'styled-components';

const Wrapper = style.div`
  position:fixed;
  left:0;
  top:0;
  width: 100%;
  background: #d2d2d2e0;
  padding: 20px;
`;

function eventHandler(cb) {
  return function(e) {
    if (e.target === e.currentTarget) {
      cb();
    }
  }
}

const Modal = ({element, closeModal}) => (
  <Wrapper id="modal-wrapper" onClickCapture={eventHandler(closeModal)}>
    {element}
  </Wrapper>
);

export {
  Modal
};