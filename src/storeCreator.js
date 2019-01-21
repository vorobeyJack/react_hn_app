import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {config} from './config/firebase.config';

/**
 * @type {StoreCreator}
 */
const store = new createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(
            thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })
        ),
        reduxFirestore(config),
        reactReduxFirebase(config)
    ),
);

export default store;
