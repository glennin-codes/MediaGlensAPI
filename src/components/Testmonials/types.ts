interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    content: string;
  }
  
export const testimonials: Testimonial[]= [
    {
      id: 1,
      name: "John Developer",
      role: "Full Stack Engineer",
      avatar:`https://source.unsplash.com/random/100x100?sig=" + ${Math.random()}`,
      rating: 5,
      content: "I've been using this API for storage and image compression. It has drastically improved the loading time of our web application. The CDN integration is seamless, and the support team is highly responsive. Great pricing too!",
    },
    {
      id: 2,
      name: "Sarah Designer",
      role: "UI/UX Designer",
      avatar: `https://source.unsplash.com/random/100x100?sig=" + ${Math.random()}`,
      rating: 4,
      content: "As a designer, image optimization is crucial for our projects. This API has made it incredibly easy to compress and optimize images without compromising quality. The support team provided helpful guidance, and the pricing model fits well within our budget.",
    },
    {
      id: 3,
      name: "Tech Startup XYZ",
      role: "CTO",
      avatar: `https://source.unsplash.com/random/100x100?sig=" + ${Math.random()}`,
      rating: 5,
      content: "Our startup relies on efficient file delivery for our users. With the help of this API, we've achieved lightning-fast load times for our multimedia content. The API's reliability, combined with excellent support, has made it an integral part of our tech stack.",
    },
    {
      id: 4,
      name: "E-commerce Company ABC",
      role: "Head of Technology",
      avatar: `https://source.unsplash.com/random/100x100?sig=" + ${Math.random()}`,
      rating: 5,
      content: "Managing a large number of product images can be challenging. This API has streamlined our image optimization process, ensuring that our product pages load quickly. The CDN support ensures global accessibility, and the responsive support team has been a valuable resource.",
    },
    {
      id: 5,
      name: "Mobile App Developer",
      role: "App Developer",
      avatar: `https://source.unsplash.com/random/100x100?sig=" + ${Math.random()}`,
      rating: 4,
      content: "Incorporating video compression into our mobile app was simplified with this API. The API's versatility for image and video optimization, coupled with competitive pricing, makes it a go-to solution for our app's media management. The documentation is comprehensive and developer-friendly.",
    },
  ];
  
  //can you give me random images urls to use as avators for users?