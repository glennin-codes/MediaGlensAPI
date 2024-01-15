import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  console.log({siteConfig})
  return (
    <header className="homePage   flex flex-col md:flex-row items-center justify-evenly w-full">
    
    <div className="md:w-1/2 text-center md:text-left  md:px-10">
      <Heading className="text-4xl py-0 font-bold subtitle" as="h1">
        {siteConfig.title}
      </Heading>
      <p className="text-xl py-2 small-text text-800 items-center">{siteConfig.tagline}</p>
  
      <div className="py-2">
        <Link
          className="bg-white rounded-md text-gray-500 px-6 py-5"
          to="/docs/intro"
        >
          Getting Started
        </Link>
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
