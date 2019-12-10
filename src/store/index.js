import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer from './rootReducer';
import handleSession from './actions/handleSessionChange';
import handleFocus from './actions/handleFocusChange';
import handlePage from './actions/handlePageChange';

const actions = {
  handleFocus,
  handleSession,
  handlePage
}

const history = createBrowserHistory({
  basename: '/trapcompendium'
});

export default function configureStore(components, upgrades) {
  return createStore(
    createRootReducer(history),
    {components,upgrades},
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  )
};

export {
  history,
  actions
};

