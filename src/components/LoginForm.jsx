import React, { useState } from "react";
import useSignIn from "../hooks/useSignIn";
import { Link } from "react-router-dom";
import {Alert } from "@mui/material"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [signin, setSignin] = useState({
    email: "",
    pass: "",
  });
  const signIn = useSignIn();
  const errMessage = useSelector(state => state.user.error);
  const user = useSelector((state)=> state.user.email);

  const handleSignin = async (e) => {
    e.preventDefault();
    signIn(signin.email, signin.pass)
    toast.info('Please wait ', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    
  };

  return (
    <form
      onSubmit={handleSignin}
      className="center flex-col h-full max-sm:px-5  px-10 overflow-hidden"
    >
      <h1 className=" font-bold text-center text-3xl max-sm:leading-10 my-3">
        Login to your Account
      </h1>
      { errMessage && <Alert className="w-full p-3" severity="error">{errMessage}</Alert>}
      <input
        className="bg-gray-200 border-none w-full   my-3  px-3 py-2  "
        type="email"
        name="email"
        placeholder="Email"
        value={signin.email}
        onChange={(e) => setSignin({ ...signin, email: e.target.value })}
        required
        autoComplete="email"
      />
    
      <input
        className="bg-gray-200 border-none  w-full my-2  px-3 py-2 "
        type="password"
        name="password"
        placeholder="Password"
        value={signin.pass}
        onChange={(e) => setSignin({ ...signin, pass: e.target.value })}
        required
        autoComplete="password"
      />
      
      <Link
        to="/auth/forgetPassword"
        className="text-sm underline font-medium my-1 "
      >
        Forget Password?
      </Link>

      <button className="loginBtn">Signin</button>
    </form>
  );
};

export default LoginForm;
