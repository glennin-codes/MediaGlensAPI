import React from "react";

const Section1: React.FC = () => {
  return (
    <div className=" mx-auto p-8 homePage  flex md:flex-row flex-col">
      {/* Left Div - Grid of Images */}
      <div className="md:w-1/2 w-full ">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          {/* First Image */}
          <div className="relative group  h-50 mt-5 md:mt-48 overflow-hidden rounded-lg mb-4">
            <img
              src="img/image1.png" 
              alt="Image 1"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold">Image 1</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative h-80 md:mt-24 mt-4 group overflow-hidden rounded-lg mb-4">
            <img
              src="img/image2.png" 
              alt="Image 2"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold">Image 2</p>
            </div>
          </div>
          {/* Third Image (Centered and Inverted Rectangle) */}
          <div className="relative  h-96 group overflow-hidden rounded-lg mb-4">
            <img
              src="img/image3.png" 
              alt="Image 3"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold">Image 3</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full flex flex-col  justify-center text-wrap md:px-4 md:items-center">
        <h3 className="text-2rtxl font-bold mb-4 text-center md:leading-none leading-loose">Very Resourceful Api</h3>
        <ul className="list-none text-small md:list-inside small-text ">
       
          <li className="mb-4">
            <h4 className="text-xl font-bold mb-2 subtitle"><span className=""><img className="h-5 w-10" src="img/Vector2.svg"/></span>Optimized Media Delivery</h4>
            Optimize your media for lightning-fast delivery. Our API employs
            advanced compression techniques for images, ensuring minimal quality
            loss while reducing file sizes significantly.
          </li>
          <li className="mb-4">
            <h4 className="text-xl font-bold subtitle mb-2">
            <span className=""><img className="h-5 w-10" src="img/Vector3.svg"/></span> Programmatic Media Manipulation
            </h4>
            Manipulate images and videos programmatically with ease. Our API
            provides powerful tools for resizing, cropping, and enhancing media,
            giving you full control over your content.
          </li>
          <li className="mb-4">
            <h3 className="text-xl subtitle font-bold mb-2"><span className=""><img className="h-5 w-10 subtitle" src="img/Vector1.svg"/></span>Fast Video Compression</h3>
            Experience blazing-fast video compression without compromising
            quality. Our API can reduce video sizes by up to 62%, ensuring
            optimal streaming performance without sacrificing content quality.
          </li>
  
        </ul>
      </div>
    </div>
  );
};

export default Section1;
