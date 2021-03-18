import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAzOonFdlOyk26xya3TUraWfDpSvMEsuxs',
  authDomain: 'ecommerce-site-ztm.firebaseapp.com',
  projectId: 'ecommerce-site-ztm',
  storageBucket: 'ecommerce-site-ztm.appspot.com',
  messagingSenderId: '505468296549',
  appId: '1:505468296549:web:7042bc676d1481db15558c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
