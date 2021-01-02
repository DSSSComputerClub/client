import firebase from "firebase";
import "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyD0zP_7asOV3PAhVlThHjY9gsJ9FH4bobc",
  authDomain: "dssscomputerclubsite.firebaseapp.com",
  databaseURL: "https://dssscomputerclubsite.firebaseio.com",
  projectId: "dssscomputerclubsite",
  storageBucket: "dssscomputerclubsite.appspot.com",
  messagingSenderId: "162808084584",
  appId: "1:162808084584:web:9817e24da584c6f4ff23dd",
};
export default firebase.initializeApp(firebaseConfig);
