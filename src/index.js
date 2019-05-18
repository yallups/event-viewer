import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import shownEvent from './temp-api/mock.event.json'
import inventory from './temp-api/mock.inventory.json'

ReactDOM.render(
  <App
    event={shownEvent}
    tickets={inventory.listing}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
