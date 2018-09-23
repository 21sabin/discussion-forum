import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PublicRoute from './router/PublicRoute';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

