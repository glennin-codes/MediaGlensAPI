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
  return (
    <header className="homePage">
    <div className="mx-auto text-center py-24">
      <Heading className="text-4xl py-0 font-bold text-white" as={'h1'}>{siteConfig.title}</Heading>
      <p className="text-xl py-2 text-white">{siteConfig.tagline}</p>

      <div className="py-2">
        <Link
          className="bg-white rounded-md text-gray-500 px-6 py-5"
          to="/docs/intro"
        >
        getting started
        </Link>
      </div>
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
