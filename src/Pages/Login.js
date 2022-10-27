import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  
  const handleGithub = () =>{
    providerLogin(githubProvider)
    .then(res=>console.log(res.user))
    .catch(e=>console.error('github login error => ',e))
  }

  const handleGoogle = () => {
    providerLogin(googleProvider)
      .then((res) => {
        // console.log(res.user);
      })
      .catch((e) => console.error("register error => ", e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log("btn clicked", email, password);

    signIn(email, password)
      .then((res) => {
        // console.log('sign in: ',res.user);
      })
      .catch((e) => console.error("sign in error => ", e));
  };

  return (
    <div>
      <div className="mt-10 bg-gray-100 flex flex-col justify-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto rounded-2xl w-56" src={bg} alt="Workflow" />
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">
            Login Now!!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            No account?
            <Link
              to="/register"
              className="font-medium text-violet-600 pl-1 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
        {/* sm:mx-auto sm:w-full sm:max-w-md */}
        <div className="mt-8 mx-auto my-0 desktop:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="mb-0 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border border-gray-300 px-3 py-2 shadow-sm focus:outline-none rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full border border-gray-300 px-3 py-2 shadow-sm focus:outline-none rounded-lg"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="divider"></div>
            <button
                onClick={handleGoogle}
              type="submit"
              className="mb-2 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
            >
              <span className="text-black mr-1">Log in with </span>
              <span className="text-blue-500 font-semibold "> G</span>
              <span className="text-red-500 font-semibold ">o</span>
              <span className="text-yellow-500 font-semibold ">o</span>
              <span className="text-blue-500 font-semibold ">g</span>
              <span className="text-green-600 font-semibold ">l</span>
              <span className="text-red-500 font-semibold ">e</span>
            </button>
            <button
                onClick={handleGithub}
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white bg-black hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
            >
              <span className="text-white mr-1">Log in with Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
