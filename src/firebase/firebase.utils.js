import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA9nABosp_I528m6QcalfBrtgY6z3HHF58",
  authDomain: "anime-xd.firebaseapp.com",
  databaseURL: "https://anime-xd.firebaseio.com",
  projectId: "anime-xd",
  storageBucket: "anime-xd.appspot.com",
  messagingSenderId: "836595831967",
  appId: "1:836595831967:web:9757d024d81d774e68feaa",
  measurementId: "G-599KHZ3Y7R"
}

export const createUserProfileDocument = async (userAuth, additionalData)=>{
  if(!userAuth) return;
  const userRef =  firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get()
  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(err){
      console.log('error creating an user')
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;