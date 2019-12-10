import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import {ListItem} from '../Templates/ListItem.jsx';
import {DetailedItem} from '../Templates/DetailedItem.jsx'
import {Modal} from '../Templates/Modal.jsx';

export function ComponentList({components, match}) {
  const {item_type} = match.params;
  return (
  <div className="row">
    <Link to="/build">⬅︎</Link>
    <Route
      path={`${match.path}/:item_id`}
      render={
        (props) => <Modal Element={DetailedItem} {...props} />
      }
    />
    <div className="col wrap" style={{alignItems: 'space-between'}}>
      {components.filter(item => item.type === item_type).map(item => (
        <ListItem key={item._id} item={item} type={item_type} match={match}/>
      ))}
    </div >
  </div>)
}

const mapStateToProps = ({components}) => ({components});

export default connect(mapStateToProps)(ComponentList);
