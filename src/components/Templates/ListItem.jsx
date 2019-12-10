import React from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';

export const ListItem = ({item, type, match}) => {
  return (
    <Wrapper key={item.id}>
      <Link to={match.url + "/" + item._id}>
        <h3>{item.name}</h3>
        <Cost type={type} item={item}/>
        <TextBox>{item.text}</TextBox>
        <FadeOut/>
      </Link>
    </Wrapper>
  )
};

const Cost = ({item, type}) => {
  if (type !== 'effect') {
    return <h4><strong>Cost:</strong> {item.cost}</h4>
  }
}

const Wrapper = style.div`
  box-sizing: content-box;

  width: 45%;
  height: min-content;
  padding: 10px;
  margin: 10px;

  border: 3px solid var(--primary-color);
  border-radius: 8px;
  font: var(--fonts);

  h3 {
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.2rem;
  }

  &:hover {
    border: 5px solid var(--primary-color-hover);
    margin: 8px;
  }
`;

const TextBox = style.p`
  font-size: 1.2rem;
  max-height: 4rem;
  overflow-y: hidden;
`;

const FadeOut = style.div`
  --text-fade: 3em;

  height: var(--text-fade);
  bottom: var(--text-fade);
  margin-bottom: calc(-1 * var(--text-fade));

  position: relative;

  background: linear-gradient(transparent, white);
`;
