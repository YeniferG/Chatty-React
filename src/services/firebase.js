import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    "apiKey": "AIzaSyDF4aMDZyU9ERhQJi0R526TNxfzNEhQzqA",
    "authDomain": "chatty-react-cdd0f.firebaseapp.com",
    "projectId": "chatty-react-cdd0f",
    "storageBucket": "chatty-react-cdd0f.appspot.com",
    "messagingSenderId": "997081263539",
    "appId": "1:997081263539:web:ebbab046e0a65daffd6fc6",
    "measurementId": "G-RWJ9EKHV6Q"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
