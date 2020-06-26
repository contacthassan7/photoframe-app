import * as firebase from 'firebase'



var config = {
    apiKey: "AIzaSyDkimTNYY6wTPO0-tYeSHd1t1qJEsOSeD4",
    authDomain: "photoframe-640da.firebaseapp.com",
    databaseURL: "https://photoframe-640da.firebaseio.com",
    projectId: "photoframe-640da",
    storageBucket: "photoframe-640da.appspot.com",
    messagingSenderId: "871440264830"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database} 