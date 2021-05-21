import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCANeFYVoLkmpTiXXLXippUCAdNhv9KIuw",
  authDomain: "linkedin-clone-c2d6a.firebaseapp.com",
  projectId: "linkedin-clone-c2d6a",
  storageBucket: "linkedin-clone-c2d6a.appspot.com",
  messagingSenderId: "163102689169",
  appId: "1:163102689169:web:a81a8a495b6b75ddfc3c30",
  measurementId: "G-DXJZKYXM78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;