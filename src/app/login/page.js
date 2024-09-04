"use client";

import { useState } from "react";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-8 right-8">
        <div className="flex space-x-4">
          {/* Login Button */}
          <button
            className={`${
              isLogin
                ? "bg-orange-500 text-white border-orange-500"
                : "text-orange-500 border-orange-100"
            } px-4 py-2 rounded-full border-2 transition`}
            onClick={() => setIsLogin(true)}
          >
            login
          </button>

          {/* Signup Button */}
          <button
            className={`${
              !isLogin
                ? "bg-orange-500 text-white border-orange-500"
                : "text-orange-500 border-orange-100"
            } px-4 py-2 rounded-full border-2 transition`}
            onClick={() => setIsLogin(false)}
          >
            signup
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100 shadow-5xl">
        <div className="bg-white w-96 h-80 p-8 rounded-lg shadow-lg border border-black">
          <h2 className="text-center text-2xl font-semibold text-gray-700">
            Welcome Back
          </h2>

          <form className="mt-16">
            <div className="relative mb-4">
              <label htmlFor="phone" className="block text-sm text-gray-600">
                Enter your Contact Number
              </label>
              <div className="flex items-center border rounded-full overflow-hidden mt-2">
                <span className="pl-4 text-gray-500">91+</span>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="9876543298"
                  className="w-full px-4 py-2 outline-none border-none"
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-12">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition duration-300"
              >
                Next &rarr;
              </button>

              <a
                href="#"
                className="text-sm text-gray-500 hover:text-gray-700 transition"
              >
                forgot password
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
