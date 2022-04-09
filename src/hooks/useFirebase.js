import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  };

  const handleGoogleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Signed Out");
    });
  };

  return { user, error, handleGoogleSignIn, handleGoogleSignOut };
};

export default useFirebase;
