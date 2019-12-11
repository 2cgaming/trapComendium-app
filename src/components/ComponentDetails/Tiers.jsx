import React from 'react';
import style from 'styled-components';

export const EffectTierTable = ({tiers}) => {
  let rows = [];
  let headers = Object.keys(tiers);
  headers.filter(val => val !== 'COST');
  headers.push('COST');

  for (let i = 0; i < 7; i++) {
    let row = [i+1];
    for (let column of headers) {
      row.push(tiers[column][i])
    }
    rows.push(row);
  }
  headers.unshift('TIER');

  return (
    <Table>
      <thead>
        <tr>
          {headers.map(column => <th>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr>
            {row.map(data => <td>{data}</td>)}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const Table = style.table`
  font-size: 0.9em;
  border-collapse: collapse;
  text-align: center;
  margin: 1em auto 0 auto;
  tbody tr:nth-child(odd) {
    background: #fdffd9;
  }
  thead {
    background: lightgray;
  }
  * {
    padding: 5px;
    border: 1px solid darkgray;
  }
  
`;
