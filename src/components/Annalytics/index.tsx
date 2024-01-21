import React, { useState, useEffect } from 'react';
import ClientIdComponent from '../ClientId';

const StorageInfoCard = () => {
  const [storageInfo, setStorageInfo] = useState({
    totalCapacity: 0,
    usedSpace: 0,
    remainingSpace: 0,
  });




  useEffect(() => {
    // Simulate an API call
    // Replace this with your actual API endpoint and logic
    const fetchStorageInfo = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        const data = await response.json();

        setStorageInfo({
          totalCapacity: data.totalCapacity,
          usedSpace: data.usedSpace,
          remainingSpace: data.totalCapacity - data.usedSpace,
        });
      } catch (error) {
        console.error('Error fetching storage information:', error);
      }
    };

    // Call the function
    fetchStorageInfo();
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
<div className="relative w-full h-full">
  {/* Display client ID in the top-right corner */}

<ClientIdComponent/>




  {/* Display User usage card */}
  <div className="max-w-md mx-auto small-text rounded-xl overflow-hidden md:max-w-2xl  mt-40 shadow-md p-5">
    <h2 className="text-2xl font-semibold mb-3">Storage Information</h2>
    <p className="small-text text-lg">Total Capacity: {storageInfo.totalCapacity} GB</p>
    <p className="small-text">Used Space: {storageInfo.usedSpace} GB</p>
    <p className="small-text">Remaining Space: {storageInfo.remainingSpace} GB</p>

    {/* Add a visual representation, such as a progress bar */}
    <div className="bg-gray-200 mt-3 rounded-md overflow-hidden">
      <div
        style={{
          width: `${(storageInfo.usedSpace / storageInfo.totalCapacity) * 100}%`,
          backgroundColor: 'blue',
          height: '10px',
        }}
      />
    </div>
  </div>
</div>

   
  );
};

export default StorageInfoCard;
