import React, { useState } from "react";
import useSignUp from "../hooks/useSignUp";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";
import { toast } from "react-toastify";

const SignupForm = () => {
  const signUp = useSignUp();
  const [signupfields, setSignupfields] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const errMessage = useSelector(state => state.user.error);
  const handleSignup = async(e) => {
    e.preventDefault();
    signUp(signupfields.name, signupfields.email, signupfields.pass);
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
      onSubmit={handleSignup}
      className="center flex-col h-full px-10 max-sm:px-5   overflow-hidden"
    >
      <h1 className=" font-bold text-3xl my-3">Create Account</h1>
      {errMessage && <Alert className="w-full p-2" severity="error">{errMessage}</Alert>}
      <input
        className="bg-gray-200 border-none w-full my-2  px-3 py-2 "
        type="text"
        name="username"
        value={signupfields.name}
        placeholder="Username"
        onChange={(e) =>
          setSignupfields({ ...signupfields, name: e.target.value })
        }
        required
        autoComplete="firstname"
      />

      <input
        className="bg-gray-200 border-none w-full my-2  px-3 py-2 "
        type="email"
        name="email"
        value={signupfields.email}
        placeholder="Email"
        onChange={(e) =>
          setSignupfields({ ...signupfields, email: e.target.value })
        }
        required
        autoComplete="email"
      />

      <input
        className="bg-gray-200 border-none w-full my-2  px-3 py-2 "
        type="password"
        name="pass"
        value={signupfields.pass}
        required
        placeholder="Password"
        onChange={(e) =>
          setSignupfields({ ...signupfields, pass: e.target.value })
        }
      />

      <button className="loginBtn ">Signup</button>
    </form>
  );
};

export default SignupForm;
