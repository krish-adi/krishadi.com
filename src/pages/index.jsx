import React from "react";
import Layout from "@theme/Layout";
import LifeMap from "./components/LifeMap";

export default function Home() {
    return (
        <Layout
            title="Hey there!"
            description="Personal website of Adithya Krishnan."
        >
            <header
                className="container sm:px-12 md:px-24 lg:px-56 py-10"
                style={{ fontFamily: "var(--mono)" }}
            >
                <h1 className="hidden">Hi! I'm Adithya Krishnan</h1>
                <h3 style={{ fontFamily: "var(--mono)" }}>
                    Hi! I'm Adithya. 👋
                </h3>
                <p>Engineer, Developer, Climber, Scientist</p>
                <address>
                    <a href="mailto:me@krishadi.com">me@krishadi.com</a>
                </address>
            </header>
            <LifeMap />
            <main
                className="container sm:px-12 md:px-24 lg:px-56 text-sm"
                style={{ fontFamily: "var(--mono)" }}
            >
                <h4 style={{ fontFamily: "var(--mono)" }} id="posts">
                    Projects
                </h4>

                <p>
                    <a href="https://querystar.io/">QueryStar</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">
                        AI-Assisted Metrics Store and Analysis Automation.
                    </span>
                </p>
                <p>
                    <a href="https://github.com/pdx-labs/pdx">P D X</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">
                        Prompt Engineering and Dev-Ops toolkit.
                    </span>
                </p>
                <p>
                    <a href="https://modelstar.io/">Modelstar</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">
                        Streamlining ML workloads within data warehouses.
                    </span>
                </p>
                <p>
                    <a href="https://greppo.io/">Greppo</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">
                        Build and deploy geospatial applications quick and easy.
                    </span>
                </p>
                <p>
                    <a href="https://github.com/krish-adi/barfi">Barfi</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">
                        Python Flow Based Programming environment with a
                        graphical programming environment.
                    </span>
                </p>
                <p>
                    <a href="/dshit">D-SHIT</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">
                        My PhD thesis on - Domestic Slurry Hydraulics in
                        Transport.
                    </span>
                </p>
                <p>
                    <a href="/rp">Research and Publications</a>
                    <span className="pl-1">:</span>
                    <span className="pl-3">My research, publications.</span>
                </p>
            </main>
        </Layout>
    );
}
