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
    <div className="p-4 card-color subtitle md:py-5 py-10 rounded-lg shadow-md flex flex-col">
    <div className="flex items-center justify-between">
    <span
      className="cursor-pointer text-lg italic py-0 subtitle"
      onClick={handleToggleVisibility}
    >
      {isClientIdVisible ? 'Hide Client Id' : 'Show Client Id'}
      {isClientIdVisible ? (
        <FiEyeOff size={24} className="ml-2" />
      ) : (
        <FiEye size={24} className="ml-2" />
      )}
    </span>
    
    {/* Copy Button */}
    <button
      onClick={handleCopyClick}
      className="flex items-center card-color border-0 bg-blue-300 px-2 py-1 rounded-md hover:bg-blue-600"
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
      
        <hr className="my-1 border-blue-gray-50 " />

     {/* Client ID */}
  <div className="text-green-400">
  <span className='subtitle'>ClientId: </span>{isClientIdVisible ? clientId : '**********'}
  </div>
      </div>
    
    
  );
};
export default ClientIdComponent;