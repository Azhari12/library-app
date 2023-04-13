import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

import Layout from "@/components/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      // https://virtserver.swaggerhub.com/devanada/hells-kitchen/1.1.0/login http://34.124.154.57:8000/auth/login
      .post("http://34.124.154.57:8000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        const data = response.data;
        Cookies.set("userData", JSON.stringify(data));
        const userData = Cookies.get("userData");
        console.log(data);
        console.log(userData);

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="relative flex flex-col justify-center min-h-screen">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-slate-600/40 lg:max-w-xl">
          <h1 className="text-3xl font-extrabold text-center text-green-500">
            Library App
          </h1>
          <h1 className="text-3xl font-semibold text-left text-black-500">
            Login
          </h1>
          <form className="mt-6" onSubmit={handleLogin}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-800 rounded-md hover:bg-black focus:outline-none focus:bg-black-600"
              >
                Sign In
              </button>
              <p className=" text-center font-medium text-gray-500 pt-5">
                Don't have an account?{" "}
                {
                  <Link className=" text-library-logo" to={"/register"}>
                    Sign up
                  </Link>
                }
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
