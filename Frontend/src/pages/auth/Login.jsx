import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Logo / Title */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-600">Borrowing System</h1>
          <p className="mt-2 text-gray-500">Chairman & Faculty Login</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email / ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username / Email
            </label>
            <input
              type="text"
              placeholder="Enter your username or email"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Forgot your password?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
