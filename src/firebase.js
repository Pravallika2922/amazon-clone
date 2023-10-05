import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsx1eL7gkylJkQwMOM8EeOEy35ahuoOhA",
    authDomain: "clone-6dd40.firebaseapp.com",
    projectId: "clone-6dd40",
    storageBucket: "clone-6dd40.appspot.com",
    messagingSenderId: "465074716101",
    appId: "1:465074716101:web:911bc9b94d83a0c7099fac",
    measurementId: "G-K2D3EBLEKM"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
  
