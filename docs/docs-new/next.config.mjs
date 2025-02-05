import nextra from "nextra";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkHtmlKatex from "remark-html-katex";
import linkEnvironmentVariables from "./plugins/link-environment-variables.mjs";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  basePath: process.env.BASE_PATH || "",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/product/introduction",
        permanent: true,
      },
    ];
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  flexsearch: false,
  mdxOptions: {
    remarkPlugins: [
      remarkMath,
      remarkFrontmatter,
      remarkHtmlKatex,
      linkEnvironmentVariables,
    ],
  },
  transform: async (result, options) => {
    console.log(`${options.route}.mdx`);
    return result;
  },
});

export default withNextra(config);
