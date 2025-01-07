import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import Router from './Routes/route'
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyACxpTaZi9QtnxGivz3QIMzlRyBBkbE2e8",
    authDomain: "practice-3e07f.firebaseapp.com",
    databaseURL: "https://practice-3e07f.firebaseio.com",
    projectId: "practice-3e07f",
    storageBucket: "practice-3e07f.appspot.com",
    messagingSenderId: "845894481813"
  };
  firebase.initializeApp(config);

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
