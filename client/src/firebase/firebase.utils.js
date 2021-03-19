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

// the async function below takes in a user object when they sign in with Google, and creates a profile for that user in our users collection in Firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check to make sure we are getting back a valid object; if it doesn't exist return out of the function
  if (!userAuth) return;
  // query inside of firestore for the document to see if it already exists

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if there isn't an existing user, then create a new one
  if (!snapShot.exists) {
    // get these details off the userAuth object
    const { displayName, email } = userAuth;
    // tells us the exact time and date in which the account was created
    const createdAt = new Date();

    try {
      // create the new user in the database
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  // we might still want the userRef object for use throughout the app, so we return it out of the function
  return userRef;
};

firebase.initializeApp(config);

// set up the auth and firestore variables for use throughout the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
