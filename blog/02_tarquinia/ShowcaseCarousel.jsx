import React from "react";
import ImageCarousel from "../../components/ImageCarousel";

export function ShowcaseCarousel() {
    return (
        <ImageCarousel
            aspectRatio={1072 / 584}
            // aspectRatio={2148 / 1194}
            sites={[
                {
                    name: "Tarquinia 1",
                    image: require("./img/1.jpg"),
                    url: "https://krishadi.com",
                },
                {
                    name: "Tarquinia 2",
                    image: require("./img/2.jpg"),
                    url: "https://krishadi.com",
                },
                {
                    name: "Tarquinia 3",
                    image: require("./img/3.jpg"),
                    url: "https://krishadi.com",
                },
                {
                    name: "Tarquinia 4",
                    image: require("./img/4.jpg"),
                    url: "https://krishadi.com",
                },
            ]}
        />
    );
}
