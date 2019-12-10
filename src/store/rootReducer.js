import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import session from './reducers/changeSession';
import components from './reducers/changeComponents';
import upgrades from './reducers/changeUpgrades';


export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    session,
    components,
    upgrades
  });
} 