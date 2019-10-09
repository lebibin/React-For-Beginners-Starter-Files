import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDDVDX2FBI16lI5Sh-5mL4cymQAq-hOxLA',
  authDomain: 'catch-of-the-day-tutoria-1eb11.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-tutoria-1eb11.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
