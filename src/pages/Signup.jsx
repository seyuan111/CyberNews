import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";

const Signup = () => {
  const back = useNavigate()
  return (
    <div>
      <div className="py-40 bg-neutral-800 text-center text-white px-4">
        <h1 className="text-3xl lg:text-5xl leading-snug mb-5">Sign Up to <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">Cyber News</span></h1>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full border border-neutral-600 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <FaArrowLeft onClick={() => back(-1)} className=" cursor-pointer text-[20px]" />
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl dark:text-white">
                  Sign up for FlipperZone
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div className="my-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div className="my-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium  dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium dark:text-white">Confirm Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""></input>
                </div>
                  <div className="flex items-center justify-between">
                  </div>
                  <button type="submit" className="mt-8 w-full text-white bg-neutral-600 hover:bg-neutral-800 duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              </form>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Signup