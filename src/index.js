import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import configureStore from './store';
import {requestOptions} from './helpers/requests';
import {parseData} from './helpers/parseData';

(function() {
  requestOptions().then(data => {
    
    let options = parseData(data);
    const store = configureStore(options);

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById(process.env.app_root || 'root')
    );
  })
})();
