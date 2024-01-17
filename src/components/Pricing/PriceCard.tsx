import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import React from "react";

  interface  PricingCardProps{
    title:string,
    price:number,
    isActive:boolean,
    features:string[]


  }
  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-12 w-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    );
  } 

  
  export function PricingCard({ title, price,isActive , features }:PricingCardProps) {
    const conditionalBackground = isActive ? 'inline-flex items-center rounded-md bg-indigo-150 px-4 py-1 subtitle  ring-1 ring-inset ring-red-300' : '';

    return (
        <>
      <Card color="gray" variant="gradient" className="w-full card-color small-text shadow-xl max-w-[20rem] p-8">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`m-0 mb-8  rounded-none border-b border-white/10 pb-8 text-center`}
        >
          <Typography variant="small"  className={`text-2xl  font-bold subtitle  uppercase ${conditionalBackground}`}>
            {title}
          </Typography>
          <Typography variant="h1"  className="mt-6 flex text-some-custom-heading justify-center gap-1 text-7xl font-normal">
            <span className="mt-2  text-4xl">$</span>
            {price} <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-some-custom-heading">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">{feature}</Typography>
              </li>
            ))}
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            className="hover:scale-[1.02] border-none cursor-pointer focus:scale-[1.02] active:scale-100 bg-some-custom-heading"
            ripple={false}
            fullWidth={true}
          >
           Subscribe Now
          </Button>
        </CardFooter>
      </Card>
      </>
    );
  }
  
  
  