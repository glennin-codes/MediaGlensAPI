import Layout from '@theme/Layout';
import React,{ useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'; 
import { FiEye, FiEyeOff } from 'react-icons/fi'; 

const SignupComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        <div className="text-2xl text-center subtitle font-semibold text-primary mb-4">Signup</div>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block small-text text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-3 border input-background  border-blue-300 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block small-text text-sm font-bold mb-2">
            Password:
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full px-3 py-3 border input-background border-blue-500 rounded-md focus:outline-none focus:border-blue-600"
              placeholder="Enter your password"
            />
            <button
    className="absolute top-1/2 transform -translate-y-1/2 right-4 subtitle bg-transparent border-0 cursor-pointer"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FiEyeOff  size={20}/> : <FiEye size={20} />}
  </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block small-text text-sm font-bold mb-2">
            Confirm Password:
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            className="w-full px-3 py-3 border input-background border-blue-500 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Confirm your password"
          />
        </div>

        {/* Signup button */}
        <button
          className={`bg-blue-500 text-center cursor-pointer border-0 mx-auto w-full text-white px-4 py-3 rounded-md mb-6 hover:bg-blue-600 transition-transform ${
            isClicked ? 'transform scale-95' : ''
          }`}
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-3 border-solid border-t-2 border-gray border-opacity-25 rounded-full"
                viewBox="0 0 24 24"
              ></svg>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>

        {/* Social login icons */}
        <div className="flex items-center  mb-4 justify-center space-x-4">
          <FaGoogle className="text-4xl text-blue-600 hover:text-blue-800 cursor-pointer" />
          <FaGithub className="text-4xl text-gray-700 hover:text-gray-800 cursor-pointer" />
        </div>

        {/* Signup link */}
        <div className="text-right mb-2">
          <a href="#" className="text-blue-500 hover:underline">
            Already have an account? Login
          </a>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default SignupComponent;
