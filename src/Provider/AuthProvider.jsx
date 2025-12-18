import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.init";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  //register
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google sing in
  const googleSignUp = () => {
    return signInWithPopup(auth, provider);
  };

  // updateUser Image  and displayname
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // login

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //logOut
  const LogOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser(null), alert("Sign-out successful.");
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    register,
    updateUser,
    login,
    LogOutUser,
    setUser,
    googleSignUp,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
