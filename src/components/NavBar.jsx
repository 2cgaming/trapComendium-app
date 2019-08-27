import React from 'react';
import styled from 'styled-components';

import defaultStyles from '../css.theme.json';

const Button = styled.button`
  padding: 0.3em 5px;
  margin: auto 10px;
  border-radius: 5px;
  background-color: ${defaultStyles.primary_color};
  color: white;
  font-size: 1.2em;
  line-height: 1em;
  transition-duration: 200ms;
  &.brand_name {
    font-family: Metamorphous;
    font-size: 1.4em;
    padding: 0.1em inherit;
  }
  &:hover {
    cursor: pointer;
    background: white;
    border: black;
    color: ${defaultStyles.primary_color};
  }
`;

const Nav = styled.nav`
  background-color: ${defaultStyles.primary_color};
  padding: 10px 20px;
`;

// will be anchor tags
export default () => (
  <Nav className="row">
    <Button>
      2CGaming
    </Button>
    <Button>
      Home
    </Button>
    <Button>
      Books
    </Button>
    <Button>
      Admin
    </Button>
  </Nav>
);
