// src/components/Login.tsx
import Layout from '@theme/Layout';
import React, { useState } from 'react';

import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsLoading(true);

    // Simulate an asynchronous operation (e.g., submitting a form)
    setTimeout(() => {
      // Reset the button state after the operation is completed
      setIsClicked(false);
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed
  };
  return (
    <Layout>
    <div className="min-h-screen flex small-text items-center justify-center">
      <div className="max-w-md w-full p-6 card-color rounded-md shadow-md">
       <div className="text-2xl  text-center subtitle font-semibold text-primary mb-4">Login</div>
        
        {/* Input fields */}
        <div className="mb-4">
          <label htmlFor="email" className="block small-text text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-3 border input-background  border-gray-400 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter your email"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="password" className="block small-text text-sm font-bold mb-2">Password:</label>
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
        
        <button
       
      className={`bg-blue-500 text-center cursor-pointer border-0 mx-auto w-full text-white px-4 py-3 rounded-md mb-4 hover:bg-blue-600 transition-transform ${
        isClicked ? 'transform scale-95' : ''
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
        <svg
          className="animate-spin h-5 w-5 mr-3  border-solid border-t-2 border-gray border-opacity-25 rounded-full"
          viewBox="0 0 24 24"
          
        >
          
        </svg>
        Submitting ..
        </>
        
      ) : (
        'Submit'
      )}
    </button>
        
        {/* Social login icons */}
        <div className="flex items-center justify-center space-x-4">
          <FaGoogle className="text-4xl text-blue-600 hover:text-blue-800 cursor-pointer" />
          <FaGithub className="text-4xl text-gray-700 hover:text-gray-800 cursor-pointer" />
        </div>
        <div className="text-right mb-2">
          <a href="Signup" className="text-blue-500 hover:underline">Signup?</a>
        </div>

      </div>
    </div>
    </Layout>
  );
};

export default Login;
