import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAxB02DNNc2i9atNaPtpdVBPlLI91WTR_w",
    authDomain: "jarim-sosisony-de351.firebaseapp.com",
    projectId: "jarim-sosisony-de351",
    storageBucket: "jarim-sosisony-de351.appspot.com",
    messagingSenderId: "241251436895",
    appId: "1:241251436895:web:4d29e903db2933f2b58eea"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;