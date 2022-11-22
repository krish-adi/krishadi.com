import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageHeader from "./components/HomepageHeader";
import HomepageHero from "./components/HomepageHero";
import HomepageMain from "./components/HomepageMain";

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Personal website of Adithya Krishnan."
        >
            <HomepageHeader />
            <HomepageHero />
            <HomepageMain />
        </Layout>
    );
}
