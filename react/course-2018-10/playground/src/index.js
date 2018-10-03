import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterStore from './counter-store';
import mathadorStore from './mathador-store';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
