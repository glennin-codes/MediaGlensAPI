import React, { useState, useEffect } from "react";
import ClientIdComponent from "../ClientId";
import axios from "axios";
import Snackbar from "../snackBar";
import { useStorageInforStore } from "@site/src/Zustand/Hooks/fileStorageInfo";
import { AlertSignup } from "../ui/Alert/Alert-Signup";
import { boolean } from "yup";
import { Spinner } from "@material-tailwind/react";

const StorageInfoCard = () => {
 
const {getStorageInfo,isLoading,Error,storageInfo}=useStorageInforStore();
   const [snackbarType, setSnackbarType] = useState("success"); // 'success' or 'error'



 

  useEffect(() => {
    const id=localStorage.getItem('id')

    // Simulate an API call
    const fetchStorageInfo = async () => { 
      try {
        await getStorageInfo(id)
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
        <p className="small-text text-lg px-2 ">
          Total Capacity: {totalCapacityGB} GB
        </p>
        <p className="small-text text-lg flex flex-row gap-2">
          Total Items Uploaded: {isLoading?<Spinner  className="h-6 w-6 inline some-custom-heading" />:storageInfo.totalItems}
        </p>
        <p className="small-text flex flex-row gap-2">Used Space:{isLoading?<Spinner  className="h-6 w-6 inline some-custom-heading" />:usedSpaceDisplay}</p>
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
          {isLoading?<Spinner  className="h-6 w-6 inline some-custom-heading" />:remainingSpaceDisplay}
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
     {Error && <AlertSignup signupResult={Error} oppener={Boolean(Error)}  />}
    </div>
  );
};

export default StorageInfoCard;
