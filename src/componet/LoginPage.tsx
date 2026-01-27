import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

const WEB3FORMS_KEY = "d9b876a4-08cc-4356-a189-f636117367e6";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isNewAccount, setIsNewAccount] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accessCode: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (isNewAccount && formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.accessCode.length < 6 || !/\d/.test(formData.accessCode)) {
      newErrors.accessCode =
        "Access code must be 6+ characters and include a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: isNewAccount ? "New Signup" : "Login Attempt",
          name: formData.name,
          email: formData.email,
          access_code: formData.accessCode,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Submission failed. Try again.");
        return;
      }
      loginUser();
      navigate("/assignments");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
   
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-gray-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl w-80 shadow-2xl space-y-5"
      >
        <h2 className="text-white text-3xl font-extrabold text-center">
          {isNewAccount ? "Join us" : "Welcome back"}
        </h2>

        {isNewAccount && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/5 text-white outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-xs">{errors.name}</p>
            )}
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/5 text-white outline-none"
        />
        {errors.email && (
          <p className="text-red-400 text-xs">{errors.email}</p>
        )}

        <input
          type="password"
          name="accessCode"
          placeholder={isNewAccount ? "Create Access Code" : "Access Code"}
          value={formData.accessCode}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/5 text-white outline-none"
        />
        {errors.accessCode && (
          <p className="text-red-400 text-xs">{errors.accessCode}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-xl disabled:opacity-50"
        >
          {loading
            ? "Please wait..."
            : isNewAccount
            ? "Create Account"
            : "Sign In"}
        </button>

        <p className="text-sm text-gray-400 text-center">
          {isNewAccount ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            onClick={() => setIsNewAccount(!isNewAccount)}
            className="text-blue-400 ml-1"
          >
            {isNewAccount ? "Log in" : "Sign up"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
