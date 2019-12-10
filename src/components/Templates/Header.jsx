import React from 'react';
import style from 'styled-components';

export const Header = () => (
  <StyledHeader>
    <a id="logo" target="_blank" href="https://www.2cgaming.com">
      2CGaming
    </a>
    <a href="/home">Home</a>
    {/* <a>Apps</a> {will become dropdown} */}
    <a target="_blank" href="https://www.2cgaming.com/store/c1/Featured_Products.html" >Books</a>
    <a id="login">Log In</a>
  </StyledHeader>
)

const StyledHeader = style.header`

  min-height: 6vh;
  font-size: 1.4rem;
  padding: 8px 16px;
  background: var(--primary-color);

  a {
    padding: 2px 4px;
    margin: auto 15px auto 0px;
    font-family: Metamorphous sans-serif;
    color: white;
    text-decoration: none;
    transition-duration: 200ms;
  }

  a:hover {
    cursor: pointer;
    background: white;
    border-radius: 5px;
    color: var(--primary-color);
  }

  a#logo {
    font-size: 2rem;
  }
  
  a#login {
    float:right;
    margin-top: 0.4rem;
  }
`;
