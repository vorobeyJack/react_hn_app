import {combineReducers} from 'redux';
import {tasks} from './tasks';
import {firestoreReducer} from 'redux-firestore';

export default combineReducers({
    tasks,
    firestore: firestoreReducer
});
