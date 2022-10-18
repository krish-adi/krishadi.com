import React from "react";
import clsx from "clsx";

import styles from "./HomepageStyles.module.css";

export default function HomepageHeader() {
    return (
        <header className={clsx("container")}>
            <div className={clsx(" ", styles.homepageHeader)}>
                <h2 className={clsx(" ", styles.category)}>
                    Engineer, Scientist, Developer, Climber
                </h2>

                <h3 className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="/me"
                    >
                        About me
                    </a>
                </h3>

                <div className={clsx(" ", styles.category)}>
                    <h3>Find me online here</h3>
                    <p>
                        <a
                            className={clsx(styles.homepageLink)}
                            style={{ marginRight: "1.5rem" }}
                            href="https://github.com/krish-adi"
                        >
                            GitHub
                        </a>
                        <a
                            className={clsx(styles.homepageLink)}
                            style={{ marginRight: "1.5rem" }}
                            href="https://www.linkedin.com/in/adithyakrishnan/"
                        >
                            LinkedIn
                        </a>
                        <a
                            className={clsx(styles.homepageLink)}
                            style={{ marginRight: "1.5rem" }}
                            href="https://twitter.com/krish_adi_"
                        >
                            Twitter
                        </a>
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="/blog"
                    >
                        Blogs
                    </a>
                    <p> Thoughts, projects and some random stuff. </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="/zettelkasten"
                    >
                        Zettelkasten
                    </a>
                    <p>
                        Personal knowledge collection on science, programming,
                        climbing.
                    </p>
                </div>

                <h3 id="posts" className={clsx(" ", styles.category)}>
                    Projects
                </h3>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink,
                            styles.homepageLink
                        )}
                        href="https://modelstar.io/"
                    >
                        Modelstar
                    </a>
                    <p>Streamlining transformations within data warehouses.</p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="https://greppo.io/"
                    >
                        Greppo
                    </a>
                    <p>
                        Build and deploy geospatial applications quick and easy.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="/dshit"
                    >
                        D-SHIT
                    </a>
                    <p>
                        My PhD thesis: Domestic Slurry Hydraulics in Transport.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="https://github.com/krish-adi/barfi"
                    >
                        Barfi
                    </a>
                    <p>
                        Python Flow Based Programming environment that provides
                        a graphical programming environment.
                    </p>
                </div>

                <div className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(
                            " ",
                            styles.category,
                            styles.homepageLink
                        )}
                        href="/rp"
                    >
                        Research and Publications
                    </a>
                    <p> My research, publications. </p>
                </div>
            </div>
        </header>
    );
}
