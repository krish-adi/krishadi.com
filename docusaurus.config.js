// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Adithya Krishnan",
    tagline: "What I do, know, learnt, practice...",
    url: "https://krishadi.com.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "krish-adi", // Usually your GitHub org/user name.
    projectName: "krishadi.com", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    // id: "zettelkasten",
                    path: "zettelkasten",
                    routeBasePath: "zettelkasten",
                    sidebarPath: require.resolve("./sidebarsZettelkasten.js"),
                    editUrl: "https://github.com/krish-adi",
                    breadcrumbs: false,
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: "G-62QSD7Z9M4",
                },
            }),
        ],
    ],

    plugins: [
        [
            "@docusaurus/plugin-content-docs",
            {
                id: "blog",
                path: "blog",
                routeBasePath: "blog",
                sidebarPath: require.resolve("./sidebarsBlog.js"),
                breadcrumbs: false,
                showLastUpdateTime: true,
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: "keywords",
                    content:
                        "snowflake, sql, machine, learning, python, data, warehouse",
                },
                {
                    name: "description",
                    content:
                        "Blog ?? Zettelkasten ?? Projects ?? Bio ?? What I do, know, learnt, practice...",
                },
            ],
            navbar: {
                hideOnScroll: true,
                logo: {
                    alt: "adithya krishnan",
                    src: "img/logo-light.svg",
                    srcDark: "img/logo-dark.svg",
                    style: { height: "24px" },
                },

                items: [
                    { to: "/", label: "Home", position: "right" },
                    { to: "/blog", label: "Blog", position: "right" },
                    {
                        to: "/zettelkasten",
                        label: "Zettelkasten",
                        position: "right",
                    },

                    {
                        href: "https://github.com/krish-adi",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                copyright: `Adithya Krishnan`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
