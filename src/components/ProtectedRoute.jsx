import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "../sections/Footer";
import useAuth from "../hooks/useAuth";


const ProtectedRoute = ({ children }) => {
  const localLogin = useAuth();
  useEffect(() => {
    localLogin();
  }, []);

  const islogin = useSelector((state) => state.user.auth);
  const localAuth = JSON.parse(localStorage.getItem("user"));
  // check if local login session details and login with email are both false then redirect to login page
  if (!islogin && !localAuth) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default ProtectedRoute;
