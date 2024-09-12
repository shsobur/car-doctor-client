import PropTypes from 'prop-types';
import auth from '../Firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    onAuthStateChanged((auth), currentUser => {
      setUser(currentUser);

      const userEmail = {email: currentUser?.email}
      console.log(userEmail);

      if(currentUser) {
        axios.post("http://localhost:5000/jwt", userEmail, {withCredentials: true})
        .then(res => {
          console.log(res.data);
        })
      }
      else{
        console.log("Current user is missing")
      }

      setLoading(false);
    })
  }, []);

  const logOut = () => {
    return signOut(auth);
  }

  const authInfo = {
    user,
    signUpUser,
    signInUser,
    googleSingIn,
    logOut,
    loading,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object
}

export default AuthProvider;