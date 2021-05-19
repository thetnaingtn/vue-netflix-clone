import Firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB1ToAvkePn77ZwvYedpAR1OkrLEgedsdc",
    authDomain: "netflix-clone-70c23.firebaseapp.com",
    projectId: "netflix-clone-70c23",
    storageBucket: "netflix-clone-70c23.appspot.com",
    messagingSenderId: "73284308393",
    appId: "1:73284308393:web:9584df4bab59e89bd548b8"
};

const firebase = Firebase.initializeApp(config)

export {
    firebase
}