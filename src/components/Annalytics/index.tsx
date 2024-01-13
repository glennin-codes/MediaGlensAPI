import React, { useState, useEffect } from 'react';

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
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl mt-5 shadow-md p-5">
      <h2 className="text-2xl font-semibold mb-3">Storage Information</h2>
      <p className="text-gray-600">Total Capacity: {storageInfo.totalCapacity} GB</p>
      <p className="text-gray-600">Used Space: {storageInfo.usedSpace} GB</p>
      <p className="text-gray-600">Remaining Space: {storageInfo.remainingSpace} GB</p>

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
  );
};

export default StorageInfoCard;
