import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/logo/logo.png";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { providerLogin, createUser } = useContext(AuthContext);

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
    form.reset();
    console.log("btn clicked", email, password);

    createUser(email, password)
    .then(res=>{
        const user = res.user;
        console.log(user);
    })
    .catch(e=>console.log('create user error => ', e))
  };

  return (
    <div>
      <div className="mt-10 bg-gray-100 flex flex-col justify-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto rounded-2xl w-56" src={bg} alt="Workflow" />
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            Already registered?
            <Link
              to="/login"
              className="font-medium text-violet-600 pl-1 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
        {/* sm:mx-auto sm:w-full sm:max-w-md */}
        <div className="mt-8 mx-auto my-0 desktop:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
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

              <div className="flex items-center">
                <input
                  id="terms-and-privacy"
                  name="terms-and-privacy"
                  type="checkbox"
                  className=""
                />
                <label
                  htmlFor="terms-and-privacy"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I agree to the
                  <Link
                    href="#"
                    className="text-primary hover:text-indigo-500 p-1"
                  >
                    Terms
                  </Link>
                  and
                  <Link
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 pl-1"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="mb-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>

            <div className="divider"></div>
            <button
              onClick={handleGoogle}
              type="submit"
              className="mb-2 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
            >
              <span className="text-black mr-1">Sign up with </span>
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
              <span className="text-white mr-1">Sign up with Github</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
