import React from "react";
import useFirebase from "../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInGoogle } = useFirebase();
  return (
    <div>
      <h1>Please log in</h1>
      <div style={{ margin: "10px" }}>
        <button>Google Sign In</button>
      </div>
      <form action="">
        <input type="email" name="" id="" /> <br />
        <input type="password" name="" id="" /> <br />
        <input type="submit" value="Submit" style={{ margin: "10px" }} />
      </form>
    </div>
  );
};

export default Login;
