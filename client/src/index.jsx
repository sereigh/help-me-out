import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import './assets/styles.scss';

const originalHistory = createBrowserHistory();

ReactDOM.render(<App history={originalHistory} />, document.getElementById('root'));
