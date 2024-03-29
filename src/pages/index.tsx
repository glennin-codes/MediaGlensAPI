import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from 'react';
import Section1 from '../homePageExample';
import TestimonialCarousel from '../components/Testmonials';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  console.log({siteConfig})
  return (
    <header className="homePage text-wrap  flex flex-col md:flex-row items-center mt-5 justify-evenly w-full">
    
    <div className="md:w-1/2 text-center md:text-left  md:px-10">
      <Heading className="text-4xl py-0 font-bold subtitle" as="h1">
        {siteConfig.title} <span className='some-custom-heading'>API</span> 
      </Heading>
      <p className="text-xl py-2 small-text text-800 items-center">{siteConfig.tagline}</p>
  
    <div className="flex flex-row gap-4 mx-auto justify-center  ">
    <div className="py-2 ">
      <Link
  className="bg-some-custom-heading text-white  rounded-full md:px-12 px-6 py-4 transition-all duration-300 hover:bg-indigo-500 hover:text-white"
  to="/subscription"
  style={{
    textDecoration: 'none',
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    color: 'none'
  }}
>
  Getting Started
</Link>

      </div>
      <div 
 className="py-2  ">
      <Link
  className="border-2 border-solid border-some-custom-heading text-some-custom-heading rounded-full md:px-12 py-4  px-6 transition-all duration-300 hover:border-pink-500"
  to="/docs/intro"
  style={{
    textDecoration: 'none',
    color: 'none',
    

  }}
>
  Learn More
</Link>

      </div>
    </div>
    </div>
    <div className="w-full md:w-1/2 md:px-10 md:py-2 pt-8">
      <img src="img/hero-trans.png" alt="hero" className="w-full h-auto round-md" />
    </div>
  </header>
  
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Section1/>
        <HomepageFeatures />
        <TestimonialCarousel/>
      </main>
    </Layout>
  );
}
