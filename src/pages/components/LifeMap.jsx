import React from "react";
import clsx from "clsx";

import styles from "./LifeMap.module.css";

import LifeMap from "../../../static/assets/life-map.svg";
import LifeMapCV from "../../../static/assets/life-map-cv.svg";

export default function HomepageHero() {
    return (
        <div className={clsx("container")} style={{ marginBottom: "2rem" }}>
            <p style={{ textAlign: "center", fontFamily: "var(--mono)" }}>
                My long story, in short...
            </p>
            <div className={clsx(" ", styles.homepageHero)}>
                <LifeMap className={styles.lifemap} />
                <LifeMapCV className={styles.lifemapcv} />
            </div>
            <p style={{ display: "none" }}>
                This life map has been inspired from https://thiagot.com/
            </p>
        </div>
    );
}
