import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {searchReducer} from '../reducers/searchReducer';
import {authReducer} from "./auth";

export default combineReducers({
    firestore: firestoreReducer,
    search: searchReducer,
    auth: authReducer
});
