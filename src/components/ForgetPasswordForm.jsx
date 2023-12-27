import React, { useState } from "react";
import { auth } from "../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

const ForgetPasswordForm = () => {
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth,email)
      .then(() => {
        setSuccess(true);
      })
      .catch((err) => {
        seterror(err.message);
      });
  };
  return (
    <form
      className="center flex-col h-full max-sm:px-5 w-full px-10 overflow-hidden"
      onSubmit={handleSubmit}
    >
      <h1 className=" font-bold text-center text-3xl max-sm:leading-10 my-3">
        Reset Password ?
      </h1>
      { error &&  <p>{`Something went Wrong!. please try again later!. ${error}`}. Click here to  <Link className="underline text-blue-500" to="/auth/login"> go back</Link></p> }
      {success && <p className="w-lg text-lg font-semibold text-black">Password reset link is sent to your email. Check your email for reset your password. Click here to 
        <Link className="underline text-blue-500" to="/auth/login"> go back</Link></p>  }
       {!success && !error &&
        <>
          <p className="text-[17px] font-medium">You can reset here!</p>

          <input
            className="bg-gray-200 border-none w-full lg:text-lg  my-3  px-3 py-2  "
            type="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
            required
            autoComplete="email"
          />

          <button className="loginBtn">reset password</button>
        </>
      }
    </form>
  );
};

export default ForgetPasswordForm;
