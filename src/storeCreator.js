import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

/**
 * @type {StoreCreator}
 */
const store = new createStore(rootReducer,
    composeWithDevTools(applyMiddleware(
        thunk
    )),
);

export default store;
