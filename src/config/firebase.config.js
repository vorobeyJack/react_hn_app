import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDp4Qbq4y-yjo1S6QjVkBgh3vZszNUiQnM",
    authDomain: "react-tms-app.firebaseapp.com",
    databaseURL: "https://react-tms-app.firebaseio.com",
    projectId: "react-tms-app",
    storageBucket: "react-tms-app.appspot.com",
    messagingSenderId: "926031807267"
};
firebase.initializeApp(config);
firebase.firestore();

export default config;
