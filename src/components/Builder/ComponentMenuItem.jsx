import React from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';

import {Button} from '../Templates/Buttons.jsx';

export const ComponentMenuItem = ({item, match}) => {
  var {cost, _id, name, text} = item;
  return (
    <ComponentWrapper key={_id}>
      <Link to={match.url + "/" + _id}>
        <Name>{name}</Name>
        {cost !== undefined ? <h4><strong>Cost:</strong> {item.cost}</h4> : null}
        <TextBox>{text}</TextBox>
        <FadeOut/>
      </Link>
    </ComponentWrapper>
  )
};

const ComponentWrapper = style(Button)`
  box-sizing: content-box;
  width: 45%;
  height: min-content;
  padding: 10px;
  margin: 10px;

  border: 3px solid var(--primary-color);
  border-radius: 8px;

  font-family: var(--fonts);

  &:hover {
    border: 5px solid var(--primary-color-hover);
    margin: 8px;
    h3 {
      color: var(--primary-color-hover);
    }
  }`;

const Name = style.h3`
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;`;

const TextBox = style.p`
  font-size: 1.2rem;
  max-height: 4rem;
  overflow-y: hidden;
  text-align: left;
`;

const FadeOut = style.div`
  --text-fade: 3em;

  height: var(--text-fade);
  bottom: var(--text-fade);
  margin-bottom: calc(-1 * var(--text-fade));

  position: relative;

  background: linear-gradient(transparent, white);
`;
