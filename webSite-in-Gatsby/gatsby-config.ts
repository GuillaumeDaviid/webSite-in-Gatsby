import type { GatsbyConfig } from "gatsby";

const path = require(`path`)

const config: GatsbyConfig = {
  siteMetadata: {
    title: `webSite-in-Gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },]
};

export default config;
