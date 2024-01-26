import BrowserOnly from '@docusaurus/BrowserOnly';
import React from 'react';
import LoginInterface from '../components/Auth/loginInterface'; // Adjust the import path based on your project structure
import useIsBrowser from '@docusaurus/useIsBrowser';

const Login = () => {
  const isBrowser = useIsBrowser();
  return (
    <BrowserOnly fallback={<div>{""}</div>}>
      {() => {
        return  isBrowser && <LoginInterface />;
      }}
    </BrowserOnly>
  );
};

export default Login;
