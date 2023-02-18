import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const auth = getAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
        await createUserWithEmailAndPassword(auth,email,password);
    } catch (error) {
        
    }
  }

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
        <form onSubmit={handleSignup} method="POST">
        <input
            aria-label="Enter your fullname"
            type="text"
            placeholder="fullname"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target}) => setFullname(target.value)}
            value={fullname}
          />
        <input
            aria-label="Enter your username"
            type="text"
            placeholder="Username"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target}) => setUsername(target.value)}
            value={username}
          />
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target}) => setEmail(target.value)}
            value={email}
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2" onChange={({target}) => setPassword(target.value)}
            value={password}
          />
          <button className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && 'opacity-50'}`} disable={isInvalid.toString()} type="submit">Sign In</button>
        </form>
      </div>
      <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm">Already have an account?
        <Link to={ROUTES.LOGIN} className=" ml-2 font-bold text-blue-medium">Log In</Link></p>
      </div>
      </div>
    </div>
  );
}

