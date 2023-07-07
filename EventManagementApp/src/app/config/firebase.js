import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0HGhTVUgEWJdd7m608XmEdLaSyaoE67M",
    authDomain: "hawesome.firebaseapp.com",
    databaseURL: "https://hawesome.firebaseio.com",
    projectId: "hawesome",
    storageBucket: "hawesome.appspot.com",
    messagingSenderId: "147765454408"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;