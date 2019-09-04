import React from 'react';
import style from 'styled-components';

const ItemWrapper = style.div`

  width: 40%;
  padding: 5px;
  margin: 10px;
  background: white;
  border: 3px solid var(--primary-color);
  border-radius: 5px;
  font: var(--fonts);
  text-align: center;
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    font-size: 0.9rem
  }
`;

const RotatedHeader = style.h3`
  text-align: center;
  background: gray;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;

const Trigger = ({item, onClick}) => (
  <ItemWrapper key={item.id}>
    <RotatedHeader>Trigger</RotatedHeader>
    <div>
      <h4>{item.name}</h4>
      <h4>
        <strong>Cost:</strong> {item.cost} <br/> <strong>Size:</strong> {item.size}
      </h4>
      <p>things will go here</p>
    </div>
  </ItemWrapper>
);

const Target = ({item, onClick}) => (
  <ItemWrapper key={item.id}>
    <RotatedHeader>Target</RotatedHeader>
    <div>
      <h4>{item.name}</h4>
      <h4>
      <h4><strong>Cost:</strong> {item.cost}<br/><strong>Target Area:</strong> 5ft</h4>
      </h4>
      <p>things will go here</p>
    </div>
  </ItemWrapper>
);

const Component = ({item, onClick}) => (
  <ItemWrapper key={item.id}>
    <RotatedHeader>Component</RotatedHeader>
    <div>
      <h4>{item.name}</h4>
      <h4>
        {/* shouldn't display table, just selected values */}
        {/* <ComponentTable params={item.params} /> */}
        Selected Row blah blah blah
      </h4>
      <p>things will go here</p>
    </div>
  </ItemWrapper>
);

export {
  Trigger,
  Target,
  Component
}