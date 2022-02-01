import firebase from 'firebase/compat/app'


import 'firebase/compat/auth';
import 'firebase/compat/database';




const firebaseConfig = {
   // apiKey: process.env.REACT_APP_API_KEY ,

// authDomain: process.env.REACT_APP_AUTH_DOMAIN,

// databaseURL:process.env.REACT_APP_DATABASE_URL,

// projectId: process.env.REACT_APP_PROJECT_ID,

// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,

// messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,

// appId: process.env.REACT_APP_APP_ID

apiKey: "AIzaSyDp_jK6FurCd5EnhR-2M3W28KRWHlaBfcA",

authDomain: "letmeask-d93d4.firebaseapp.com",

databaseURL: "https://letmeask-d93d4-default-rtdb.firebaseio.com",

projectId: "letmeask-d93d4",

storageBucket: "letmeask-d93d4.appspot.com",

messagingSenderId: "431946697405",

appId: "1:431946697405:web:ce02efed128178b8dc45d4"
    
  };



  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

  export{ firebase, auth, database}