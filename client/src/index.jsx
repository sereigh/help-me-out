import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import './assets/styles.scss';

const history = createBrowserHistory();

ReactDOM.render(<App history={history} />, document.getElementById('root'));
