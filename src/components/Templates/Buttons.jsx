import style from 'styled-components';

export const Button = style.div`
  width: fit-content;
  padding: 15px;
  margin: 10px auto;
  font-size: 1.5rem;
  font-family: var(--font-accent);
  text-align: center;
  &:hover{
    cursor: pointer;
  }`;

export const GrayButton = style(Button)`
  color: gray;
  background: #b6b4b4;
  border: 3px solid #b6b4b4;
  transition: 0.3s;
  &:hover {
    border: 3px solid black;
    color: black;
  }`;

export const NavButton = style(Button)`
  width: auto;
  background: white;
  border: 3px solid black;
  border-radius: 5px;
  color: black;
  text-decoration: none;

  transition: 0.3s;

  &:hover {
    background-color: var(--primary-color-hover);
    border-color: black;
    color: white;
  }`;

export const TestButton = style(Button)`
color: gray;
background: #b6b4b4;
border: 3px solid #b6b4b4;
  &:hover {
    background-color: var(--primary-color-hover);
    border-color: black;
    color: white;
    cursor: pointer;
  }`;

export const ReturnButton = style.div`
  width: fit-content;
  padding: 3px 6px;
  background: lightgray;
  border: none;
  color: white;
  font-size:1.2rem;`;

export const FinalizeButton = style(Button)`
  color: gray;
  background: #b6b4b4;
  border: 3px solid #b6b4b4;
  &:hover {
    color: gray;
    background: #b6b4b4;
    border: 3px solid #b6b4b4;
    cursor: default;
  }
  ${props => {
    return props.isComplete
      ? `color: black;
      background: white;
      border: 3px solid var(--primary-color);
      &:hover {
        background: white;
        border-color: var(--primary-color-hover);
        color: var(--primary-color-hover);
      }`
      : ''
  }}
`;