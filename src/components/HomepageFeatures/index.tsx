import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Developer-Friendly",
    Svg: require("@site/static/img/code.svg").default,
    description: (
      <>
        Comprehensive documentation, providing detailed guides and examples for
        seamless integration.Versatile code in multiple
        languages ensuring smooth integration.
      </>
    ),
  },
  {
    title: "Efficient Media Storage",
    Svg: require("@site/static/img/file.svg").default,
    description: (
      <>
        Store and organize images, videos, and files seamlessly with our robust
        API. Enjoy secure and scalable storage for all your media assets
      </>
    ),
  },
  {
    title: "24/7 Support",
    Svg: require("@site/static/img/support.svg").default,
    description: (
      <>
        Get quick assistance from our dedicated support team for a seamless
        integration experience. Whether you have questions, encountered issues, or need guidance.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center ">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center  padding-horiz--md">
        <Heading className="some-custom-heading" as="h3">
          {title}
        </Heading>
        <p className="small-text">{description}</p>
        <img src="img/arrow.svg"  className="cursor-pointer  "/>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row ">
          {FeatureList.map((props, idx) => (
            <Feature  key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
