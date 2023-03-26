// import firebase from './firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import "firebase/compat/database"
import 'firebase/compat/auth'
// import { getFirestore } from '@firebase/firestore'
// import initializeApp from 'firebase/compat/app'

// const firebase = require("firebase");
// require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyAJsSXIOishlNNPusNfqgmACZ_f2ZkrX2o",
    authDomain: "kenia-7ccd5.firebaseapp.com",
    projectId: "kenia-7ccd5",
    storageBucket: "kenia-7ccd5.appspot.com",
    messagingSenderId: "18508636757",
    appId: "1:18508636757:web:620d9c6baedc8fcec02adc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(firebaseApp);
const auth = firebase.auth()

export { auth };
export {firebase};
export default db 