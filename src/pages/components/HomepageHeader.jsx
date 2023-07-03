import React from "react";
import clsx from "clsx";
import styles from "./HomepageStyles.module.css";

export default function HomepageHeader() {
    return (
        <header className={clsx("container")}>
            <h1 style={{ display: "none" }}>Hi! I'm Adithya. 👋</h1>
            <div className={clsx(" ", styles.homepageHeader)}>
                <div className={clsx(" ", styles.category)}>
                    <h3 style={{ fontFamily: "var(--mono)" }}>
                        Hi! I'm Adithya. 👋
                    </h3>
                    <p>Engineer, Developer, Climber, Scientist</p>
                    <address>
                        <a href="mailto:me@krishadi.com">me@krishadi.com</a>
                    </address>
                </div>

                <p className={clsx(" ", styles.category)}>
                    <a
                        style={{
                            marginRight: "1.5rem",
                            display: "inline-block",
                        }}
                        href="/about"
                    >
                        About-me
                    </a>
                    <a
                        style={{
                            marginRight: "1.5rem",
                            display: "inline-block",
                        }}
                        href="/cv"
                    >
                        CV
                    </a>

                    <a
                        style={{
                            marginRight: "1.5rem",
                            display: "inline-block",
                        }}
                        href="https://github.com/krish-adi"
                    >
                        GitHub
                    </a>
                    <a
                        style={{
                            marginRight: "1.5rem",
                            display: "inline-block",
                        }}
                        href="https://www.linkedin.com/in/adithyakrishnan/"
                    >
                        LinkedIn
                    </a>
                    <a
                        style={{
                            marginRight: "1.5rem",
                            display: "inline-block",
                        }}
                        href="https://twitter.com/krish_adi_"
                    >
                        Twitter
                    </a>
                </p>
            </div>
        </header>
    );
}
