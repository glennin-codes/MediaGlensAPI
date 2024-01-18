import React, { useEffect, useState } from 'react';
import TestimonialCard from './testimonialCard';
import { testimonials } from './types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

import styles from "../HomepageFeatures/styles.module.css";
// or other themes
import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';

function TestimonialCarousel() {
    const [perPage, setPerPage] = useState<number>(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          setPerPage(1); // Set to 1 on small screens
        } else {
          setPerPage(3); // Set to 3 on larger screens
        }
      };
  
      handleResize(); // Initial call
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
console.log({perPage});
  return (
    <div className={`mx-auto md:px-8   py-8 flex justify-center items-center w-full`}
 
    >
   
      <Splide
          options={ {
            rewind : true,
            perPage: perPage,
            height : '28rem',
            gap    : '1rem',
            
        
          } }
          
        >
          {testimonials.map((testimonial,index) => (
            <SplideSlide key={ index }>
              <TestimonialCard key={testimonial.id} {...testimonial} />
            </SplideSlide>

          ) ) }
        </Splide>
   
    </div>
  );
}

export default TestimonialCarousel;

//  function TestimonialCarousel() {
//   return (
//    <div className="mx-auto w-full md:1/2  px-8 py-4">
//      <Carousel
   
//     transition={
//        { duration:2,
//         type:'spring',


//     }}
    
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
       
//        {testimonials.map((testimonial) => (
//      <TestimonialCard key={testimonial.id} {...testimonial} />      ))}

      
//     </Carousel>

//    </div>
//   );
// }
// export default TestimonialCarousel;