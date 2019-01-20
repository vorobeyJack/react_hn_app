import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<h3>Hello from App</h3>,document.getElementById('root'));
serviceWorker.unregister();
