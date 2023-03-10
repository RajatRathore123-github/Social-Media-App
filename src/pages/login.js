import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import * as ROUTES from "../constants/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../lib/firebase";


export default function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const auth = getAuth(firebaseApp);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
       await signInWithEmailAndPassword(auth,email,password);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Login-social";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 rounded border border-gray-primary mb-4">
        <h1 className="flex justify-center w-full">
          <img className="mt-2 w-6/12" src="" alt="App-logo" />
        </h1>
        {error && <p className="mb-4 text-xs text-red-primary"></p>}
        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target}) => setEmail(target.value)}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target}) => setPassword(target.value)}
          />
          <button className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`} disable={isInvalid.toString()} type="submit">Log In</button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm">Dont't have an account?
        <Link to={ROUTES.SIGN_UP} className=" ml-2 font-bold text-blue-medium">Sign Up</Link></p>
      </div>
      </div>
    </div>
  );
}
