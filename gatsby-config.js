require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "MyPortforio",
    description: "中村夏都のポートフォリオです．",
    author: "Natsu Nakamura"
  },
  plugins: [        {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
      accessToken: process.env.GATSBY_CONTENTFUL_API_KEY
    }
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 50,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      }
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-image`,
],
};