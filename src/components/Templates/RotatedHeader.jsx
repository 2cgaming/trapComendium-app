import style from 'styled-components';

const RotatedHeader = style.h3`
  text-align: center;
  background: gray;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;