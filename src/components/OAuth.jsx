import React from "react";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../firebase";
const OAuth = () => {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await si;
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="btn bg-red-600 rounded-lg p-3 text-white uppercase shadow-lg hover:opacity-95"
    >
      login With Google
    </button>
  );
};

export default OAuth;
