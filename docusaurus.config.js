// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Adithya Krishnan",
    tagline: "What I do, know, learnt, practice...",
    favicon: "img/favicon.ico",
    
    // production url site settings here
    url: "https://krishadi.com.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

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
                // docs: {
                //     path: "zettelkasten",
                //     routeBasePath: "zettelkasten",
                //     sidebarPath: require.resolve("./sidebarsZettelkasten.js"),
                //     breadcrumbs: false,
                //     showLastUpdateTime: true,
                // },
                docs: {
                    path: "posts",
                    routeBasePath: "posts",
                    sidebarPath: require.resolve("./sidebarsZettelkasten.js"),
                    breadcrumbs: false,
                    showLastUpdateTime: true,
                },
                blog: false,
                // blog: {
                //     path: "blog",
                //     routeBasePath: "blog",
                //     blogSidebarCount: 0,
                //     blogListComponent: require.resolve(
                //         "./components/BlogListPage.jsx"
                //     ),
                //     blogPostComponent: require.resolve(
                //         "./components/BlogPostPage.jsx"
                //     ),
                // },
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
        // Plugin for TailwindCSS
        async function TailwindCSSPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
        [
            "@docusaurus/plugin-client-redirects",
            {
                redirects: [
                    // /docs/oldDoc -> /docs/newDoc
                    {
                        to: "/zettelkasten/tutorials/greppo-introduction",
                        from: "/blog/greppo-introduction",
                    },
                    {
                        to: "/zettelkasten/tutorials/gee-greppo",
                        from: "/blog/gee-greppo",
                    },
                ],
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
                        "snowflake, sql, machine learning, python, data warehouse, large language models, prompt, prompt engineering",
                },
                {
                    name: "description",
                    content:
                        "Blog · Zettelkasten · Projects · Bio · What I do, know, learnt, practice...",
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
                    {
                        to: "/",
                        label: "Home",
                        position: "right",
                        activeBaseRegex: "^/$",
                    },
                    { to: "/about", label: "About", position: "right" },
                    { to: "/projects", label: "Projects", position: "right" },
                    // { to: "/blog", label: "Blog", position: "right" },
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
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

module.exports = config;
