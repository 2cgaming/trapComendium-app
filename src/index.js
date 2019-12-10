import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import App from './App.jsx';
import configureStore, {history} from './store';
import {fetchData} from './helpers/requests';



fetchData().then(data => {
  const store = configureStore(... data);

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById(process.env.app_root || 'root')
  );
})