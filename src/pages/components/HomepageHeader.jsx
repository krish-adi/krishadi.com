import React from "react";
import clsx from "clsx";
import styles from "./HomepageStyles.module.css";

export default function HomepageHeader() {
    return (
        <header className={clsx("container")}>
            <div className={clsx(" ", styles.homepageHeader)}>
                <div className={clsx(" ", styles.category)}>
                    <h3 style={{ fontFamily: "var(--mono)" }}>
                        Hi! I'm Adithya. 👋
                    </h3>
                    <p>Engineer, Developer, Climber, Scientist</p>
                    <address>
                        <a
                            className={clsx(styles.homepageLink)}
                            href="mailto:me@krishadi.com"
                        >
                            me@krishadi.com
                        </a>
                    </address>
                </div>

                <p className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem", display: "inline-block" }}
                        href="/me"
                    >
                        About-me
                    </a>
                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem", display: "inline-block" }}
                        href="/cv"
                    >
                        CV
                    </a>

                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem", display: "inline-block" }}
                        href="https://github.com/krish-adi"
                    >
                        GitHub
                    </a>
                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem", display: "inline-block" }}
                        href="https://www.linkedin.com/in/adithyakrishnan/"
                    >
                        LinkedIn
                    </a>
                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem", display: "inline-block" }}
                        href="https://twitter.com/krish_adi_"
                    >
                        Twitter
                    </a>
                </p>
            </div>
        </header>
    );
}
