/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata:{
    title:"BackRoads",
    description: "Explore awesome worldwide tours and descover what makes each of them uniq.Forget your daily routine and say yes to adventure",
    author:"bmw@gamil.com",
    lovername: "Nipa bali",
    houseno: "302/7",
    data:{
      name: "Nipa",
      age: "24",
      ver: "1.0.0",
    }
  },
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-transition-link`,
],
}
