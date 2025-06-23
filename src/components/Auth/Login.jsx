import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted", email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-[#1C1C1C]">
      <div className="border-2 border-red-300 px-8 py-23 rounded shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-300 mb-30  ">
          Login Account
        </h1>
        <form onSubmit={SubmitHandler}>
          <div className="mb-6">
            <label className="sr-only" for="email">
              Email
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons text-gray-400">email</span>
              </div>
              <input
                className="w-full bg-gray-700 text-white border border-red-500 rounded-full py-3 pl-10 pr-4 focus:outline-none custom-focus-ring focus:border-red-600 placeholder-gray-400"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="sr-only" for="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons text-gray-400">lock</span>
              </div>
              <input
                className="w-full bg-gray-700 text-white border border-red-500 rounded-full py-3 pl-10 pr-16 focus:outline-none custom-focus-ring focus:border-red-600 placeholder-gray-400"
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-gray-400 hover:text-red-400 focus:outline-none"
                type="button"
              >
                Show
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-red-600 border-gray-500 rounded focus:ring-red-500 bg-gray-700"
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label
                className="ml-2 block text-sm text-gray-300"
                for="remember-me"
              >
                Remember me
              </label>
            </div>
            <a className="text-sm text-red-400 hover:text-red-300" href="#">
              Forget Password
            </a>
          </div>
          <button
            className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
