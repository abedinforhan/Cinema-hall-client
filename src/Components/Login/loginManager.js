import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



export const initializeFirebase=() => 
{ 
  if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
}

export const googleSignIn =() =>{

  const googleProvider = new firebase.auth.GoogleAuthProvider();

   return  firebase.auth().signInWithPopup(googleProvider).then(function(result) {
    
      const {displayName,email}=result.user;
      const loggedInUser={
        isLoggedIn:true,
        name:displayName,
        email:email,
      
      }
     return loggedInUser;
      
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }