import React from 'react';
import style from 'styled-components';

export const Cost = ({cost}) => {
  if (cost === null || cost === undefined) return null
  return <CostElement className='cost'><strong>Cost: </strong>{cost}</CostElement>
}

const CostElement = style.h5``;

export const Tier = ({tier}) => {
  if (tier === null || tier === undefined) return null
  return <h5><strong>Tier: </strong>{tier}</h5>
}