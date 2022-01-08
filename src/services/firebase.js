import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    "apiKey": "AIzaSyAoVfar3hDTdPB5ManQ3Drl_zQuhtEYTSM",
    "authDomain": "chatty-fccaa.firebaseapp.com",
    "projectId": "chatty-fccaa",
    "storageBucket": "chatty-fccaa.appspot.com",
    "messagingSenderId": "387875050071",
    "appId": "1:387875050071:web:a4479f9554283cdf8a8912",
    "measurementId": "G-YS0HR4GGDJ"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
