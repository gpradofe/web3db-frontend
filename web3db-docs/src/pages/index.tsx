import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className={styles.heroImage}>
            <img src="/img/Web3DBLogo.png" alt="Web3DB Logo" />
          </div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Documentation for Web3DB"
    >
      <HomepageHeader />
      <main>
        <div className={styles.mainContent}>
          <div className={styles.intro}>
            <h2>Welcome to Web3DB Documentation</h2>
            <p>
              Web3DB is a decentralized database solution that combines the
              power of blockchain technology with traditional database
              functionalities. It provides a secure, scalable, and efficient way
              to store and manage data in a decentralized manner.
            </p>
          </div>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
