import React, { useState, useEffect } from 'react';

const Snackbar = ({ message, type, onClose }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    // Show the Snackbar
    setShowSnackbar(true);

    // Automatically hide the Snackbar after 3000 milliseconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      setShowSnackbar(false);
      onClose();
    }, 8000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [message, onClose]);

  return (
    <div className={`fixed md:bottom-4  md:w-1/2 w-full ${showSnackbar ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
      <div
        className={`bg-${type === 'success' ? 'green' : 'red'}-500 text-white py-2 px-4 rounded-md shadow-md`}
      >
        {message}
      </div>
    </div>
  );
};

export default Snackbar;
