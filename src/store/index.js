import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';

import session from './reducers/changeSession';
import focus from './reducers/changeFocus';
import page from './reducers/changePage';
import options from './reducers/changeOptions';

import handleSession from './actions/handleSessionChange';
import handleFocus from './actions/handleFocusChange';
import handlePage from './actions/handlePageChange';

const reducer = combineReducers({
  session,
  focus,
  options,
  page
});

const actions = {
  handleFocus,
  handleSession,
  handlePage
}

export default function configureStore(options) {
  return createStore(reducer, {options}, applyMiddleware(thunk))
};

export {actions};

