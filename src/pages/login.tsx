// src/components/Login.tsx
import Layout from '@theme/Layout';
import React from 'react';

import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login: React.FC = () => {
  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      00/ <div className="text-2xl  text-center heading font-semibold text-primary mb-4">Login</div>
        
        {/* Input fields */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-3 border input-background  border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-3 border input-background  border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter your password"
          />
        </div>
        {/* Forgot Password link */}
        <div className="text-right mb-4">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        
        {/* Submit button */}
        <button className="bg-blue-500  cursor-pointer  border-0 mx-auto w-full text-white px-4 py-3 rounded-md mb-4 hover:bg-blue-600">Submit</button>
        
        
        
        {/* Social login icons */}
        <div className="flex items-center justify-center space-x-4">
          <FaGoogle className="text-4xl text-blue-600 hover:text-blue-700 cursor-pointer" />
          <FaGithub className="text-4xl text-gray-800 hover:text-gray-900 cursor-pointer" />
        </div>
        <div className="text-right mb-2">
          <a href="#" className="text-blue-500 hover:underline">Signup?</a>
        </div>

      </div>
    </div>
    </Layout>
  );
};

export default Login;
