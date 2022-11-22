import React from "react";
import clsx from "clsx";

import styles from "./HomepageStyles.module.css";

import LifeMap from "../../../static/assets/life-map.svg";
import LifeMapCV from "../../../static/assets/life-map-cv.svg";

export default function HomepageHeader() {
    return (
        <header className={clsx("container")}>
            <div className={clsx(" ", styles.homepageHeader)}>
                <h3 className={clsx(" ", styles.category)}>
                    Hi! I'm Adithya. 👋
                </h3>
                <h3 className={clsx(" ", styles.category)}>
                    Engineer, Developer, Climber, Scientist
                </h3>

                <p className={clsx(" ", styles.category)}>
                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem" }}
                        href="/me"
                    >
                        About me
                    </a>
                    <a
                        className={clsx(styles.homepageLink)}
                        style={{ marginRight: "1.5rem" }}
                        href="/cv"
                    >
                        My CV
                    </a>

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
        </header>
    );
}
