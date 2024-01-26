// VerificationPage.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const VerificationPage = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const simulateVerification = () => {
 
    setLoading(true);

    // // Simulate API call (replace with your actual verification logic)
    // setTimeout(() => {
    //   const random = Math.random();
    //   if (random < 0.7) {
    //     setSuccess(true);
    //     setError(false);
    //   } else {
    //     setError(true);
    //     setSuccess(false);
    //   }
    //   setLoading(false);
    // }, 2000);
 
  };

  return (
    <div className="flex h-screen items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Verifying please wait </h1>
      {loading && <div className="animate-spin text-blue-500 text-2xl mb-4">Loading...</div>}
      {!loading && !success && !error && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          onClick={simulateVerification}
        >
          Verify
        </button>
      )}
      {success && (
          <div className=" flex flex-col animate__animated animate__fadeIn animate__delay-1s text-green-500 text-2xl mb-4">
            <FaCheck className="text-4xl animate__animated animate__bounce mx-auto" />
            {' '}Verification Successful!
          </div>
        )}
        {error && (
          <div className="flex flex-col animate__animated animate__fadeIn animate__delay-1s text-red-500 text-2xl mb-4">
            <FaTimes className="text-4xl animate__animated  animate__shakeX mx-auto" />
            {' '}Verification Failed. Please try again.
          </div>
        )}
    </div>
  </div>
  );
};

export default VerificationPage;
