import style from 'styled-components';

export const Button = style.div`
width: fit-content;
  padding: 15px;
  margin: 10px auto;
  font: var(--fonts);
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
  background: lightgray;
  color: gray;
  width: fit-content;
  border: none;
  color: white;
  width: 3em;
  text-align: center;`;

export const FinalizeButton = style(Button)`
  color: gray;
  background: #b6b4b4;
  border: 3px solid #b6b4b4;
  &:hover {
    pointer-events: none;
  }
  ${props => {
    return props.isComplete
      ? `background: white;
      border: 3px solid black;
      &:hover {
        background-color: var(--primary-color-hover);
        border-color: black;
        color: white;
      }`
      : ''
  }}
`;