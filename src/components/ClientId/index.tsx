import React, { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import { FiEye, FiEyeOff } from "react-icons/fi";

// ...

const ClientIdComponent = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [clientId] = useState<string>('64ed4for0931m1');
  const [isClientIdVisible, setIsClientIdVisible] = useState(true);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(clientId);
    setIsCopied(true);

    // Reset the "Copied!" text after a brief delay (e.g., 3 seconds)
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };
  const handleToggleVisibility = () => {
    setIsClientIdVisible(!isClientIdVisible);
  };
  return (
    <div className="p-4 subtitle  py-5 mt-5 rounded-lg shadow-sm">
      <div className="text-sm font-mono relative">
          
            <span
          className="top-0 left-0 cursor-pointer text-lg italic py-0 subtitle "
          onClick={handleToggleVisibility}
        >
             {isClientIdVisible ? 'Hide Client Id ' : ' Show Client Id '}
          {isClientIdVisible ? <FiEyeOff  size={24} className="ml-2" /> : <FiEye size={24} className="ml-2" />}
         
        </span>
      
        <hr className="my-1 border-blue-gray-50 " />

        <span className="text-green-400">{`Client ID:`}</span> {isClientIdVisible?
           clientId:"**********"
        }
        
        <button
          onClick={handleCopyClick}
          className="absolute card-color border-0 bg-blue-300 top-0 right-0 cursor-pointer transform translate-x-2 -translate-y-1/2 flex items-center   px-2 py-1 rounded-md hover:bg-blue-600"
          title="Copy"
        >
          {isCopied ? (
            <FaCheck className="mr-2" />
          ) : (
            <FaCopy className="mr-2" />
          )}
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    
    </div>
  );
};
export default ClientIdComponent;