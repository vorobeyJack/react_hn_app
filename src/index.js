import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Application} from './components/Application';

import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Application/>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
