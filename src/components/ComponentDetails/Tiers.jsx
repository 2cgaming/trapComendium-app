import React from 'react';
import style from 'styled-components';

// need to handle tier input
export const TierTable = ({tiers, tierNum, handler}) => {
  if (tiers === undefined || tiers === null) return null;
  let rows = [];
  let headers = Object.keys(tiers);
  headers = headers.filter(val => val !== 'Cost');
  headers.push('Cost');

  for (let i = 0; i < 7; i++) {
    let row = [i+1];
    for (let column of headers) {
      row.push(tiers[column][i])
    }
    rows.push(row);
  }
  headers.unshift('Tier');

  return (
    <div>
      <label htmlFor='tier'>Tier: </label>
      <input 
        name='tier'
        type='number'
        defaultValue={1}
        min={tierNum || 1} max={7}
        onChange={(e) => handler(e.target.value)}
      />
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
    </div>
  )
}

const Table = style.table`
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
