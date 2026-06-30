import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [currentState, setCurrentState] = useState("Login"); // "Login" | "Sign Up"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="mx-auto flex max-w-sm flex-col gap-5 pt-20"
    >
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-white">{currentState}</h1>
      </div>

      {currentState === "Sign Up" && (
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
        />
      )}

      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
      />

      <input
        required
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-indigo-500"
      />

      <div className="flex justify-between text-sm text-slate-400">
        <span className="cursor-pointer hover:text-indigo-600">
          Forgot your password?
        </span>
        {currentState === "Login" ? (
          <span
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer hover:text-indigo-600"
          >
            Create account
          </span>
        ) : (
          <span
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer hover:text-indigo-600"
          >
            Login here
          </span>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}