import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import 'firebase/compat/storage';




const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChnUGzXEn_rIEYzD8vbZfXovkTAkVhMFY",
    authDomain: "tiktok-18ae6.firebaseapp.com",
    projectId: "tiktok-18ae6",
    storageBucket: "tiktok-18ae6.appspot.com",
    messagingSenderId: "854919362244",
    appId: "1:854919362244:web:30a8cb0a0bd5cb6940fb91",
    measurementId: "G-JF3J8B1G5X"
});




  const db = firebase.firestore();
  

  const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, storage};
  export default db;