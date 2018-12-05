const path = require(`path`);

const siteMetadata = {
  siteURL: "https://daveswoodworking.netlify.com/",
  title: "Miles Woodwork",
  description: "A Website Showcasing David Miles' Woodworking Projects",
  homePage: "https://github.com/prp1277/DavesWoodwork#daves-woodworking",
  contact: {
    name: "Patrick Powell",
    email: "MailTo:prp1277@gmail.com",
    github: "https://github.com/prp1277/",
    linkedin: "https://linkedin.com/in/prpowell1277/",
    twitter: "https://twitter.com/patp0w/"
  },
  socialMedia: {
    facebook: {
      url: "https://www.facebook.com/Daves-Woodworking-1577530669229362/",
      logo: "https://img.icons8.com/metro/50/e7e6e6/facebook.png"
    },
    instagram: {
      url: "https://www.instagram.com/dtmiles1591/",
      logo: "https://img.icons8.com/metro/50/e7e6e6/instagram.png"
    },
  }
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DavesWoodworking",
        short_name: "DavesWoodworking",
        start_url: ".",
        background_color: "#000",
        theme_color: "#0563c1",
        display: "minimal-ui",
        icon: "src/favicon.svg"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-copy-linked-files"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/pages/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ], //End Plugins
};
