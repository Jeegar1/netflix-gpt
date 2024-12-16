import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    console.log(isSignInForm);
  };

  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="bg-image"
        />
      </div>
      <Header />
      <form className="py-10 px-12 bg-black/85 max-w-md mx-auto text-white rounded-md">
        <h1 className="font-bold text-[32px] leading-10 pb-4 mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-4 mb-4 w-full rounded-md bg-gray-800 "
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-4 mb-4 w-full rounded-md bg-gray-800 "
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-4 w-full mb-4 rounded-md bg-gray-800"
        />
        <button className="px-4 py-2 bg-red-600 w-full rounded-md hover:bg-red-700 transition duration-500">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="mt-4 cursor-pointer inline-block"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
