import React, { useState } from "react";
import { Alert, Button, Typography } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="green"
      className="h-6 w-6  "
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function ErrorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6 "
    
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
        style={{ color: '#EF4444' }}
      />
    </svg>
  );
}

type Props={
  signupResult:string,
  oppener:boolean
}
export function AlertSignup({signupResult,oppener}:Props) {
  const [open, setOpen] = useState(oppener);

  const generateContent = () => {
    if (signupResult.includes("verification")) {
      return (
        <>
          <Typography variant="h5" className="some-custom-heading">
            Success
          </Typography>
          <Typography  className="mt-2  font-medium text-[#2ec946]">
            {signupResult}
          </Typography>
        </>
      );
    } else if (!signupResult.includes("verification")) {
      return (
        <>
          <Typography variant="h5" className="text-red-500">
            Error!
          </Typography>
          <Typography  className="mt-2  font-medium text-red-500 ">
           {signupResult}

          </Typography>
        </>
      );
    }
  };

  return (
    <>
     
      <Alert
        open={open}
        variant="outlined"
        className={`max-w-screen-md ${signupResult.includes('email')? "rounded-none border-solid border-l-4 border-[#2ec946] bg-[#2ec946]/10"  : " border-solid border-l-4 border-[#EF4444] bg-red-500/20" } md:mt-8 md:mb-6 sm:mb-0 sm-py-0 ` }
        icon={signupResult.includes('email')?<Icon />:<ErrorIcon/>}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: -60 },
          unmount: { y: 100 },
        }}
    
      >
        {generateContent()}
      </Alert>
    </>
  );
}
