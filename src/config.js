import firebase from 'firebase'
import "firebase/storage"

var firebaseConfig = {
  
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  const auth = firebase.auth();

  export const storage  = firebase.storage();

  export {auth};

  export {database};
