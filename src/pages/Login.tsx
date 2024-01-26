import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';
import LoginInterface from '../components/Auth/loginInterface'; // Adjust the import path based on your project structure
"use client";
const Login = () => {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return <LoginInterface />;
      }}
    </BrowserOnly>
  );
};

export default Login;
