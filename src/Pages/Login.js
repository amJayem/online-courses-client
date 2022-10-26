import React from "react";
import { Link } from "react-router-dom";
import bg from '../assets/logo/logo.png';

const Login = () => {
  return (
    <div>
      <div className="mt-10 bg-gray-100 flex flex-col justify-center ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto rounded-2xl w-56"
            src={bg}
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">
            Login Now!!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 max-w">
            No account?
            <Link to='/register' className="font-medium text-violet-600 pl-1 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Sign up
            </Link >
          </p>
        </div>
        {/* sm:mx-auto sm:w-full sm:max-w-md */}
        <div className="mt-8 mx-auto my-0 desktop:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="mb-0 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700" >
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
                  <Link href="#" className="text-primary hover:text-indigo-500 p-1">
                    Terms
                  </Link>
                  and
                  <Link href="#" className="text-indigo-600 hover:text-indigo-500 pl-1">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <form action="">

      </form>
    </div>
  );
};

export default Login;
