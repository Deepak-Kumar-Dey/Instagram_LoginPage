import { useState } from "react";

import googlePlay from "../assets/googlePlay.png";
import microsoft from "../assets/microsoft.png";
import facebookIcon from "../assets/facebookIcon.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setMessage("Invalid login details. Please try again.");
  };

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6">
      
      <div className="w-full max-w-[350px] bg-white border border-gray-300 py-8 px-6 sm:px-8">
        
        
        <h1 className="text-center font-logo text-[44px] sm:text-[52px] md:text-[58px] font-medium text-[#262626] mb-8">Instagram</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="email"
            placeholder="Phone number, username, or email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400"/>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400"/>

         
          {message && (
            <p className="text-xs text-red-500 text-center">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-400 text-white text-sm font-semibold py-2 rounded hover:bg-blue-500 transition">
            Log in
          </button>
        </form>

        
        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-4 text-xs font-semibold text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

       
        <div className="flex justify-center">
          <button className="flex items-center gap-2 text-sm font-semibold text-blue-900 hover:bg-blue-50 px-3 py-1 rounded transition">
            <img src={facebookIcon} alt="Facebook" className="h-4 w-4" />
            Log in with Facebook
          </button>
        </div>

        
        <div className="text-center mt-4">
          <a href="#" className="text-xs text-blue-900">
            Forgotten your password?
          </a>
        </div>
      </div>

     
      <div className="w-full max-w-[350px] bg-white border border-gray-300 mt-3 py-4 text-center">
        <p className="text-sm">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500 font-semibold cursor-pointer">
            Sign up
          </span>
        </p>
      </div>

     
      <div className="text-center mt-6">
        <p className="text-sm mb-3">Get the app.</p>
        <div className="flex gap-3 justify-center">
          <img src={googlePlay} alt="Google Play" className="h-10 sm:h-11" />
          <img src={microsoft} alt="Microsoft" className="h-10 sm:h-11" />
        </div>
      </div>
    </div>
  );
}
