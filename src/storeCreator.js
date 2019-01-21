import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import firebase from 'firebase';
import firestore from 'firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import config from './config/firebase.config';

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
        reactReduxFirebase(firebase, config),
        reduxFirestore(firestore, config),
    ),
);

export default store;
