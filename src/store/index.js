import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer from './rootReducer';
import handleSession from './actions/handleSessionChange';
import handleFocus from './actions/handleFocusChange';
import handlePage from './actions/handlePageChange';
import handleAddTrap from './actions/handleAddTrap';

const actions = {
  handleFocus,
  handleSession,
  handlePage,
  handleAddTrap
}

const history = createBrowserHistory({
  basename: '/trapcompendium'
});

export default function configureStore(components, upgrades, traps) {
  
  var mw = compose(
    applyMiddleware(thunk, routerMiddleware(history))
  );
  return createStore(
    createRootReducer(history),
    {components,upgrades,traps},
    mw
  )
};

export {
  history,
  actions
};

