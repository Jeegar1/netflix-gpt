import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    // Validate form data
    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    // sign up/sign in logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { USER_AVATAR },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_IMG_URL}
          alt="bg-image"
          className="h-screen xl:h-auto object-cover"
        />
      </div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="pt-[30%] md:pt-[20%] lg:pt-[10%]"
      >
        <div className="py-10 px-12 bg-black/85 max-w-md mx-auto text-white rounded-md">
          <h1 className="font-bold text-[32px] leading-10 pb-4 mb-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="px-4 py-4 mb-4 w-full rounded-md bg-gray-800 "
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="px-4 py-4 mb-4 w-full rounded-md bg-gray-800 "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-4 py-4 w-full mb-4 rounded-md bg-gray-800"
          />
          <p className="text-red-500 font-semibold mb-4 text-md">
            {errorMessage}
          </p>
          <button
            className="px-4 py-2 bg-red-600 w-full rounded-md hover:bg-red-700 transition duration-500"
            onClick={handleButtonClick}
          >
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
        </div>
      </form>
    </div>
  );
};

export default Login;
