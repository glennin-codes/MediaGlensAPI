import React, { useState, useEffect } from "react";
import ClientIdComponent from "../ClientId";
import axios from "axios";
import Snackbar from "../snackBar";

const StorageInfoCard = () => {
  const [storageInfo, setStorageInfo] = useState({
    totalItems: 0,
    bytes: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState(null);

  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarType, setSnackbarType] = useState("success"); // 'success' or 'error'

  const handleShowSnackbar = (message: string, type: string) => {
    setSnackbarMessage(message);
    setSnackbarType(type);
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage("");
    setSnackbarType("success"); // Reset type to default (success)
  };

  useEffect(() => {
    handleShowSnackbar("Error message", "error");
    // Simulate an API call
    // Replace this with your actual API endpoint and logic
    const fetchStorageInfo = async () => {
      // Reusable function to set withCredentials
      axios.interceptors.request.use(
        (config) => {
          config.withCredentials = true;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
      try {
        const id = "65ae62ac46a98e112c936dc0";
        const response = await axios.get(
          `http://localhost:8080/api/users/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const { bytes, totalItems } = await response?.data?.storage;
        console.log(bytes);
        setStorageInfo({
          // totalCapacity: data.totalCapacity,
          bytes,
          totalItems,
          // usedSpace: data.usedSpace,
          // remainingSpace: data.totalCapacity - data.usedSpace,
        });
      } catch (error) {
        console.error("Error fetching storage information:", error);
      }
    };
    // Call the function
    fetchStorageInfo();
  }, []);
  // Assuming totalCapacity is always 25 GB for this example
  const totalCapacityGB = 25;

  // Convert usedSpace and remainingSpace to GB
  const usedSpaceGB = storageInfo.bytes / (1024 * 1024 * 1024);
  const remainingSpaceGB = totalCapacityGB - usedSpaceGB;

  // Determine the appropriate unit for display (GB or MB)
  const usedSpaceDisplay =
    usedSpaceGB >= 1
      ? `${usedSpaceGB.toFixed(3)} GB`
      : `${(usedSpaceGB * 1024).toFixed(3)} MB`;
  const remainingSpaceDisplay =
    remainingSpaceGB >= 1
      ? `${remainingSpaceGB.toFixed(3)} GB`
      : `${(remainingSpaceGB * 1024).toFixed(3)} MB`;

  // Set a warning threshold (25 MB)
  const warningThresholdMB = 500 / 1024;

  // Determine the color of the progress bar based on remaining space
  const progressBarColor =
    remainingSpaceGB <= warningThresholdMB ? "red" : "green";

  return (
    <div className=" w-full h-full ">
      {/* Display client ID in the top-right corner */}

      <ClientIdComponent />

      {/* Display User usage card */}
      <div className="max-w-md mx-auto flex flex-col justify-center  rounded-xl overflow-hidden md:max-w-2xl mt-10 shadow-md p-5">
        <h2 className="text-2xl font-semibold mb-3">Storage Information</h2>
        <p className="small-text text-lg px-2">
          Total Capacity: {totalCapacityGB} GB
        </p>
        <p className="small-text text-lg">
          Total Items Uploaded: {storageInfo.totalItems}
        </p>
        <p className="small-text">Used Space: {usedSpaceDisplay}</p>
        <p>
          {" "}
          <span className="small-text">Remaining Space: </span>
          <span
            className={`${
              remainingSpaceGB <= warningThresholdMB
                ? "text-red-400"
                : "text-blue-400/100 "
            }`}
          >
            {remainingSpaceDisplay}
          </span>
        </p>

        {/* Add a visual representation, such as a progress bar */}
        <div className="bg-gray-200 mt-3 rounded-md overflow-hidden">
          <div
            style={{
              width: `${(usedSpaceGB / totalCapacityGB) * 100}%`,
              backgroundColor: progressBarColor,
              height: "10px",
            }}
          />
        </div>
      </div>
      {snackbarMessage && (
        <Snackbar
          message={snackbarMessage}
          type={snackbarType}
          onClose={handleCloseSnackbar}
        />
      )}
    </div>
  );
};

export default StorageInfoCard;
