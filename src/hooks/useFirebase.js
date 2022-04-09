import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  const signInGoogle = () => {
    console.log("sign in is coming");
  };

  return { user, setUser, signInGoogle };
};

export default useFirebase;
