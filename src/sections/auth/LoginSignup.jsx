import React, { useEffect } from "react";
import { loginBg } from "../../assets";
import { useNavigate}  from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {  userActions } from "../../utils/store/userSlice";
import { toggleSignFn } from "../../utils/store/togglesigninSlice";
import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
 

const LoginSignup = ({toggleSign}) => {

  const navigate =  useNavigate();
  const toggleSignup = useSelector(state => state.toggleSign.signIn);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(userActions.addUsername(""))
    dispatch(userActions.addEmail(""))
    dispatch(userActions.addPassword(""))
    dispatch(userActions.addError(""))
  },[]);
  
  useEffect(()=>{
    if(toggleSign){
      dispatch(toggleSignFn(true))
    }else{
      dispatch(toggleSignFn(false))
    }
  },[toggleSign]);

  return (
    <section className="flex justify-center bg-black items-center w-screen h-screen  ">
      <img
        src={loginBg}
        alt="loginBackgroundImage"
        style={{ filter: 'brightness(50%)' }}
        className="absolute z-0  w-screen h-screen object-cover object-center"
      />
      <div className="overflow-hidden  shadow-3xl bg-white  rounded-lg relative 
        max-sm:w-[324px] max-sm:h-[600px] max-md:w-[384px] max-md:h-[640px] w-[768px] min-h-[480px]">
        {toggleSignup ? (
          <div
            className="absolute right-0 bottom-0 h-full w-[50%]  
            max-sm:h-[400px] max-md:w-full max-md:h-[400px] max-md:bottom-0"
          >
            <SignupForm />
          </div>
        ) : (
          <div className="absolute left-0 top-0 h-full w-[50%] max-md:h-[400px] max-md:w-full max-sm:h-[400px]">
            <LoginForm />
          </div>
        )}

        {!toggleSignup ? (
          <div
            className="bg-red-500 absolute center flex-col right-0 w-[50%] h-full px-10 overflow-hidden
            max-md:w-full max-md:bottom-0 max-md:h-[240px] max-sm:h-[200px] max-sm:px-5"
          >
            <h1 className="font-bold text-3xl text-white capitalize">
              New Here ?
            </h1>
            <p className="text-md capitalize text-white">
              Join Movies Hub for unlimited movies!
            </p>
            
            <button
              onClick={(e) =>  navigate("/auth/signup")}
              className="signinBtn mt-5 w-[60%] "
              id="SignUp"
              >
             Sign up
            </button>
           
          </div>
        ) : (
          <div
            className="bg-red-500 absolute left-0 center flex-col  w-[50%] h-full px-10 overflow-hidden
            max-md:w-full max-md:top-0 max-md:h-[240px] max-sm:h-[200px] max-sm:px-5"
          >
            <h1 className="font-bold text-3xl text-white capitalize">
              Welcome Back !
            </h1>
            <p className="text-md capitalize text-white">
              Return to your movies in a click!
            </p>
            <button
              onClick={(e) =>  navigate("/auth/login")}
              className="signinBtn mt-5 w-[60%] "
              id="SignIn"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginSignup;
