import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvgPrdTXovjm6wJqOz6mFPXfQQJSQDBCc",
    authDomain: "slack-3454a.firebaseapp.com",
    databaseURL: "https://slack-3454a.firebaseio.com",
    projectId: "slack-3454a",
    storageBucket: "slack-3454a.appspot.com",
    messagingSenderId: "879608424440",
    appId: "1:879608424440:web:cbdc601486e3ef0246180d",
    measurementId: "G-T6LTN2M5JR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;