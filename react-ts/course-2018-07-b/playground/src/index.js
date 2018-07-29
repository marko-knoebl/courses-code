import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import mathadorStore from './mathadorstore';

ReactDOM.render(
  <Provider store={mathadorStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
