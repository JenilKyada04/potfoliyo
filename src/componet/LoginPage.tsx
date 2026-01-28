import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const LoginPage: React.FC = () => {
  const [isNewAccount, setIsNewAccount] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = () => {
    loginUser();
    navigate("/assignments");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl w-[380px] shadow-2xl space-y-5"
      >
        <div className="space-y-2">
          <h2 className="text-white text-3xl font-extrabold text-center tracking-tight">
            {isNewAccount ? "Join us" : "Welcome back"}
          </h2>
          <p className="text-gray-400 text-sm text-center">
            {isNewAccount ? "Create your credentials" : "Enter your details to login"}
          </p>
        </div>

        <input type="hidden" name="access_key" value="d9b876a4-08cc-4356-a189-f636117367e6" />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
        <input type="hidden" name="subject" value={isNewAccount ? "New Account Request" : "Login Request"} />

        <div className="space-y-4">
          {isNewAccount && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />

          <input
            type="password"
            name="access_code"
            placeholder={isNewAccount ? "Create Access Code" : "Access Code"}
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:brightness-110 text-white font-bold py-3 rounded-xl shadow-xl shadow-blue-900/20 active:scale-95 transition-all"
        >
          {isNewAccount ? "Create Account" : "Sign In"}
        </button>

        <div className="pt-2">
          <p className="text-sm text-gray-400 text-center">
            {isNewAccount ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsNewAccount(!isNewAccount)}
              className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              {isNewAccount ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>

        <div className="pt-4 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 text-center font-semibold">
            Developed by Jenil Kyada
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
