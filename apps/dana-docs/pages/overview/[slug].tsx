import { GetStaticPaths, GetStaticProps } from 'next';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import fs from 'fs';

import PostContent from '../../shared/components/PostContent';
import {
    getParsedFileOverviewContentBySlug,
    renderMarkdown,
} from '../../shared/utils/markdown/markdown';
import { MarkdownRenderingResult } from '../../shared/utils/markdown/types';

interface ArticleProps extends ParsedUrlQuery {
    slug: string;
}

const POSTS_PATH = join(process.cwd(), 'content/docs/overview');

const Overview = ({ html }) => {
    return (
        <>
            <PostContent content={html} />
        </>
    );
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
    params,
}: {
    params: ArticleProps;
}) => {
    // read markdown file into content and frontmatter
    const articleMarkdownContent = getParsedFileOverviewContentBySlug(
        params.slug,
        POSTS_PATH
    );

    // generate HTML
    const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

    return {
        props: {
            frontMatter: articleMarkdownContent.frontMatter,
            html: renderedHTML,
        },
    };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
    const paths = fs
        .readdirSync(POSTS_PATH)
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, ''))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};

export default Overview;
