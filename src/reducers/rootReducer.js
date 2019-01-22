import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {searchReducer} from '../reducers/searchReducer';

export default combineReducers({
    firestore: firestoreReducer,
    search: searchReducer
});
