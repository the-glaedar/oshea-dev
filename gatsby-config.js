require("dotenv").config({
  path: ".env",
});

const linkResolver = require("./src/utils/linkResolver");

module.exports = {
  siteMetadata: {
    title: "oshea-dev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO,
        accessToken: process.env.PRISMIC_ACCESS_KEY,
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          blogPost: require("./custom_types/blog_post.json"),
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "montserrat",
          "source sans pro:300,400,400i,700", // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
