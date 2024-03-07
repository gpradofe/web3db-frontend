import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Decentralized Data Storage",
    icon: "🔒",
    description: (
      <>
        Web3DB leverages blockchain technology to provide a decentralized and
        secure data storage solution. Your data is distributed across a network
        of nodes, ensuring data integrity and resistance to censorship.
      </>
    ),
  },
  {
    title: "Seamless Integration",
    icon: "🔌",
    description: (
      <>
        Integrate Web3DB seamlessly into your existing applications using our
        intuitive APIs and SDKs. Whether you're building a DApp or a traditional
        application, Web3DB makes it easy to incorporate decentralized data
        storage.
      </>
    ),
  },
  {
    title: "Scalable and Efficient",
    icon: "⚡",
    description: (
      <>
        Web3DB is designed to handle large-scale data storage and retrieval
        efficiently. With its optimized data structures and consensus
        mechanisms, Web3DB ensures high performance and scalability for your
        decentralized applications.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Why Web3DB?</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
