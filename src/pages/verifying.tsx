// VerificationPage.js
import { useHistory, useLocation } from '@docusaurus/router';
import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useAuthStore } from '../Zustand/Hooks/authStore';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';

const VerificationPage = () => {
const  history=useHistory();
 const {verify,isAuthenticated,error,success,isLoading}=useAuthStore();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Extract values from the query parameters
  const email = searchParams.get('email');
  const code = searchParams.get('code');
  const expirationTimestamp = searchParams.get('e');
  const fetchData = async () => {
    try {
      // Assuming verify returns a Promise
      await verify({ email, code, expirationTimestamp });
      if (isAuthenticated) {
        history.push('/dashboard');
      }
     
    } catch (error) {
      console.error('Error verifying:', error);
      // Handle the error as needed
    }
  };


useEffect(() => {
  fetchData();
}, []);


  return (

        <Layout>
    <div className="flex h-screen items-center justify-center">
    <div className="text-center">
      {!success && !error && <h1 className="text-4xl font-bold mb-4">Verifying please wait </h1>}
      {isLoading && <div className="animate-spin text-blue-500 text-2xl mb-4">Loading...</div>}

      {success && (
          <div className=" flex flex-col animate__animated animate__fadeIn animate__delay-1s text-green-500 text-2xl mb-4">
            <FaCheck className="text-4xl animate__animated animate__bounce mx-auto" />
            {' '}Verification Successful!
          </div>
        )}
        {error && (
          <div className="flex flex-col animate__animated animate__fadeIn animate__delay-1s text-red-500 text-2xl mb-4">
            <FaTimes className="text-4xl animate__animated  animate__shakeX mx-auto" />
            {' '}Verification Failed. {error}
          </div>
        )}
    </div>
  </div>
  </Layout>
   
  );
};

export default VerificationPage;
