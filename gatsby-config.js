require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Pat Mogianesi's Blog",
    description: "My blog on discussing tech, philiosophy, and things going on in my life.",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: `www-pmogi-com`
      }
    },
  ],
};
