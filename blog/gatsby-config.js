/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
/**
require('dotenv').config({
      path: `.env.${process.env.NODE_ENV}`
}) */
/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `Davids Gatsby Blog`,
    description: `My Blog Projet for IT-Dev164`,
    author: `David Stupek`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: `David Stupek`,
      company: `Davids Blog`,
      address: `123 Boss Ave`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
    resolve: `gatsby-source-contentful`,
    options: {
       spaceId: "xd9z9fjvfxxj",
       accessToken: "Sq1ENknp51W21c2uHgmKrhxC9kiwOw-B4PK7_KXQBHo"
       
        //spaceId: `${process.env.SPACE_ID}`,
        //accessToken: `${process.env.ACCESS_TOKEN}`
      }
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
