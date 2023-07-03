import React from "react";
import Layout from "@theme/Layout";
import HomepageHeader from "./components/HomepageHeader";
import HomepageMain from "./components/HomepageMain";

export default function Home() {
    return (
        <Layout
            title="Hey there!"
            description="Personal website of Adithya Krishnan."
        >
            <HomepageHeader />
            <HomepageMain />
        </Layout>
    );
}
