import React from 'react';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import {ComponentMenuItem as Component} from './ComponentMenuItem.jsx';
import {ComponentDetails} from '../ComponentDetails/ComponentDetails.jsx'
import {Modal} from '../Templates/Modal.jsx';
import {ReturnButton} from '../Templates/Buttons.jsx';

const ComponentList = props => {
  var {components, match} = props
  const {item_type} = match.params;
  return (
  <div className="row">
    <Link to="/build">
      <ReturnButton>⬅︎</ReturnButton>
    </Link>
    <Route
      path={`${match.path}/:item_id`}
      render={(props) => <Modal Element={ComponentDetails} {...props} />}
    />
    <div className="col wrap" style={{alignItems: 'space-between'}}>
      {components.filter(item => item.type === item_type).map(item => (
        <Component key={item.id} item={item} type={item_type} match={match}/>
      ))}
    </div >
  </div>)
}

const mapStateToProps = ({components}) => ({components});

export default connect(mapStateToProps)(ComponentList);
