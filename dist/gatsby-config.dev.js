"use strict";

var path = require("path");

module.exports = {
  siteMetadata: {
    title: "Parsa Alian",
    author: "Parsa Alian",
    description: "Personal webpage by Parsa Alian.",
    siteUrl: "http://localhost:8000",
    social: {
      twitter: "@parsaalian",
      linkedin: "parsa-alian-394431147",
      github: "parsaalian"
    }
  },

  /* Your site config here */
  plugins: [{
    resolve: "gatsby-plugin-mdx",
    options: {
      defaultLayouts: {
        "default": path.resolve("./src/components/MDXLayout.jsx")
      }
    }
  }, "gatsby-plugin-react-helmet"]
};