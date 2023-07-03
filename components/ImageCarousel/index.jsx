import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import styles from "./styles.module.css";

function SiteSlide({ index, site }) {
    return (
        <Slide index={index} className={styles.siteSlide}>
            <Image
                img={site.image}
                alt={site.name}
                loading={index === 0 ? "eager" : "lazy"}
            />
            <Link to={site.url} className={styles.siteLink} target="_blank">
                🔗 {site.name}
            </Link>
        </Slide>
    );
}

export default function ImageCarousel({ sites, aspectRatio }) {
    return (
        <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1 / aspectRatio}
            totalSlides={sites.length}
            infinite
            className={styles.carousel}
        >
            <Slider>
                {sites.map((site, index) => (
                    <SiteSlide key={index} index={index} site={site} />
                ))}
            </Slider>
            <ButtonNext className={styles.navButton} style={{ right: -20 }}>
                {">"}
            </ButtonNext>
            <ButtonBack className={styles.navButton} style={{ left: -20 }}>
                {"<"}
            </ButtonBack>
            <DotGroup className={styles.dotGroup} />
        </CarouselProvider>
    );
}
