import firebase from 'firebase';

const firebaseConfig = {
  // YOUR API CONFIG HERE
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;