import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import Application from './components/Application';
import storeCreator from './storeCreator';
import ErrorBoundary from './components/ErrorBoundary';

import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={storeCreator}>
        <ErrorBoundary>
            <Router>
                <Application/>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
