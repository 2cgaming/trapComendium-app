import style from 'styled-components';
export const Button = style.div`
  padding: 15px;
  margin: 10px auto;
  font: var(--fonts);
  font-size: 1.5rem;
  text-align-last: center;
  width: fit-content;
`;

export const GrayButton = style(Button)`
color: gray;
background: #b6b4b4;
border: 3px solid #b6b4b4;

transition: 0.3s;
&:hover {
  border: 3px solid black;
  color: black;
}
`;

export const TestButton = style(Button)`
color: gray;
background: #b6b4b4;
border: 3px solid #b6b4b4;
  &:hover {
    background-color: var(--primary-color-hover);
    border-color: black;
    color: white;
    cursor: pointer;
  }
`;