import React from 'react'
import { loginBg } from '../../assets'
import ForgetPasswordForm from '../../components/ForgetPasswordForm'

const ForgetPassword = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen  ">
      <img
        src={loginBg}
        alt=""
        style={{ filter: 'brightness(50%)' }}
        className="absolute z-0 w-full h-full object-cover object-center"
      />
        <div className="z-10 center p-5 bg-white rounded-sm shadow-3xl lg:w-[500px] lg:p-10 h-auto md:w-[400px]
          max-sm:w-[360px]">
          <ForgetPasswordForm />
        </div>
    </section>
  )
}

export default ForgetPassword