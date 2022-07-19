import firebase from 'firebase/compat/app'
import  'firebase/compat/auth'
import  'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAY7i_SBGaN5lCp16i2aLWme4gYUFK8Mz0",
    authDomain: "facebook-e62e6.firebaseapp.com",
    projectId: "facebook-e62e6",
    storageBucket: "facebook-e62e6.appspot.com",
    messagingSenderId: "92469447121",
    appId: "1:92469447121:web:4f1c05f0fd88445754f8f0"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth ,provider};
  export default db;
  
  