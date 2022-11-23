import React from "react";
import clsx from "clsx";

import styles from "./HomepageStyles.module.css";

import LifeMap from "../../../static/assets/life-map.svg";
import LifeMapCV from "../../../static/assets/life-map-cv.svg";

export default function HomepageMain() {
    return (
        <main className={clsx("container")}>
            <div className={clsx(" ", styles.homepageHeader)}>
                <div className={clsx(" ", styles.category)}>
                    <a className={clsx(styles.homepageLink)} href="/blog">
                        Blogs
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>                        
                        Thoughts, projects and some random stuff.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(styles.homepageLink)}
                        href="/zettelkasten"
                    >
                        Zettelkasten
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>
                        Personal knowledge collection on science, programming,
                        climbing.
                    </p>
                </div>

                <h3 id="posts" className={clsx(" ", styles.category)}>
                    Projects
                </h3>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(styles.homepageLink)}
                        href="https://modelstar.io/"
                    >
                        Modelstar
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>
                        Streamlining transformations within data warehouses.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(styles.homepageLink)}
                        href="https://greppo.io/"
                    >
                        Greppo
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>
                        Build and deploy geospatial applications quick and easy.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a className={clsx(styles.homepageLink)} href="/dshit">
                        D-SHIT
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>
                        My PhD thesis: Domestic Slurry Hydraulics in Transport.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(styles.homepageLink)}
                        href="https://github.com/krish-adi/barfi"
                    >
                        Barfi
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>
                        Python Flow Based Programming environment that provides
                        a graphical programming environment.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a className={clsx(styles.homepageLink)} href="/rp">
                        Research and Publications
                    </a>
                    <p className={clsx(styles.homepageLinkDescription)}>
                        {" "}
                        My research, publications.{" "}
                    </p>
                </div>
            </div>
        </main>
    );
}
