import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../utils/store/userSlice";

const useSignOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    try {
        signOut(auth).then(() => {
        console.log("signout successfully!");
        dispatch(userActions.isAuth(false))
        localStorage.removeItem("user")
        navigate("/auth/login")
      });
    } catch (err) {
      console.log(err);
    }
  };
  return logOut;
};

export default useSignOut;
