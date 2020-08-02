import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {ChoicesProvider} from './context'

ReactDOM.render(
  <ChoicesProvider>
    <Router>
    <App />
    </Router>
  </ChoicesProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
