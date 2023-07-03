import React from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    PageMetadata,
    HtmlClassNameProvider,
    ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import Link from "@docusaurus/Link";

function BlogListPageMetadata(props) {
    const { metadata } = props;
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext();
    const { blogDescription, blogTitle, permalink } = metadata;
    const isBlogOnlyMode = permalink === "/";
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <>
            <PageMetadata title={title} description={blogDescription} />
            <SearchMetadata tag="blog_posts_list" />
        </>
    );
}

function BlogPostListItem({ post }) {
    console.log(post);
    return (
        <div className="mb-5">
            <p
                className="text-sm mb-1"
                style={{ color: "var(--ifm-color-emphasis-600)" }}
            >
                {post.content.metadata.formattedDate}
            </p>
            <h3 className="">
                <Link to={post.content.metadata.permalink}>
                    {post.content.metadata.title}
                </Link>
            </h3>
        </div>
    );
}

function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props;
    return (
        <BlogLayout sidebar={sidebar}>
            <div className="container flex flex-col max-w-[700px]">
                <h1 className="hidden">Blog posts</h1>
                <h2 className="mb-8">Blog posts</h2>
                {items.map((item, idx) => (
                    <BlogPostListItem post={item} key={idx} />
                ))}
            </div>
            <BlogListPaginator metadata={metadata} />
        </BlogLayout>
    );
}

export default function BlogListPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogListPage
            )}
        >
            <BlogListPageMetadata {...props} />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
